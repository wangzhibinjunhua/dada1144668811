/**
 ****************************************************************************************
 *
 * @file main.c
 *
 * @brief Proximity Reporter
 *
 * Copyright (C) 2015. Dialog Semiconductor, unpublished work. This computer
 * program includes Confidential, Proprietary Information and is a Trade Secret of
 * Dialog Semiconductor.  All use, disclosure, and/or reproduction is prohibited
 * unless authorized in writing. All Rights Reserved.
 *
 * <black.orca.support@diasemi.com> and contributors.
 *
 ****************************************************************************************
 */

#include <string.h>
#include <stdio.h>
#include <stdbool.h>

#include "osal.h"
#include "resmgmt.h"
#include "ad_ble.h"
#include "ad_nvms.h"
#include "ad_nvparam.h"
#include "ble_mgr.h"
#include "hw_cpm.h"
#include "hw_gpio.h"
#include "sys_clock_mgr.h"
#include "sys_power_mgr.h"
#include "sys_watchdog.h"
#include "platform_devices.h"
#include "hw_breath.h"
#include "hw_led.h"
#include "math.h"

/* Task priorities */
#define mainPXP_REPORTER_TASK_PRIORITY              ( OS_TASK_PRIORITY_NORMAL )


//test_r
#define RBLE_SENSOR_TASK_PRIORITY              ( OS_TASK_PRIORITY_NORMAL )

#define mainTEMPLATE_TASK_PRIORITY		( OS_TASK_PRIORITY_NORMAL )

#define mainCOUNTER_FREQUENCY_MS                OS_MS_2_TICKS(200)

#if (dg_configTRACK_OS_HEAP == 1)
/*
 * ConstantsVariables used for Tasks Stack and OS Heap tracking
 * Declared global to avoid IDLE stack Overflows
 */
#define mainMAX_NB_OF_TASKS           10
#define mainMIN_STACK_GUARD_SIZE      8 /* words */
#define mainTOTAL_HEAP_SIZE_GUARD     64 /*bytes */

TaskStatus_t pxTaskStatusArray[mainMAX_NB_OF_TASKS];
uint32_t ulTotalRunTime;
#endif /* (dg_configTRACK_OS_HEAP == 1) */

/* The configCHECK_FOR_STACK_OVERFLOW setting in FreeRTOSConifg can be used to
check task stacks for overflows.  It does not however check the stack used by
interrupts.  This demo has a simple addition that will also check the stack used
by interrupts if mainCHECK_INTERRUPT_STACK is set to 1.  Note that this check is
only performed from the tick hook function (which runs in an interrupt context).
It is a good debugging aid - but won't catch interrupt stack problems until the
tick interrupt next executes. */
//#define mainCHECK_INTERRUPT_STACK			1
#if mainCHECK_INTERRUPT_STACK == 1
const unsigned char ucExpectedInterruptStackValues[] = { 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC };
#endif

#if dg_configUSE_WDOG
INITIALISED_PRIVILEGED_DATA int8_t idle_task_wdog_id = -1;
#endif


/*
 * Perform any application specific hardware configuration.  The clocks,
 * memory, etc. are configured before main() is called.
 */
static void prvSetupHardware( void );

//extern long test_math(void);
extern long test_math(float angle);

extern void RbleSensorControlTask( void *pvParameters );

static OS_TASK rble_sensor_handle = NULL;
void pxp_reporter_task( void *pvParameters);

bool rble_led1_opend=false;

void rble_open_led1(void)
{
	breath_config config = {
    //			   .dc_min = 31,
	//			   .dc_max = 32,

				   .dc_min = 15,
				   .dc_max = 16,
				   
				   .dc_step = 1,
				   .freq_div = 255,
				   .polarity = HW_BREATH_PWM_POL_POS
		   };
	
		   hw_breath_init(&config);
		   hw_led_set_led1_src(HW_LED_SRC1_BREATH);
		   hw_led_enable_led1(true);
		   hw_breath_enable();
		   rble_led1_opend=true;

}

void rble_close_led1(void)
{
	breath_config config = {
//				   .dc_min = 31,
//				   .dc_max = 32,
				   .dc_min = 15,
                   .dc_max = 16,

				   .dc_step = 1,
				   .freq_div = 255,
				   .polarity = HW_BREATH_PWM_POL_POS
		   };
	
		   hw_breath_init(&config);
		   hw_led_set_led1_src(HW_LED_SRC1_BREATH);
		   hw_led_enable_led1(false);
		   hw_breath_disable();
		   rble_led1_opend=false;

}


static void prvTemplateTask2( void *pvParameters )
{
        OS_TICK_TIME xNextWakeTime;
        static uint32_t test_counter=0;
        int a=3;

        float b=3.14159265;
        float c=3.6;

        /* Initialise xNextWakeTime - this only needs to be done once. */
        xNextWakeTime = OS_GET_TICK_COUNT();

	for( ;; ) {
                /* Place this task in the blocked state until it is time to run again.
                   The block time is specified in ticks, the constant used converts ticks
                   to ms.  While in the Blocked state this task will not consume any CPU
                   time. */
                vTaskDelayUntil( &xNextWakeTime, mainCOUNTER_FREQUENCY_MS );
                test_counter++;

                if (test_counter % (1000 / OS_TICKS_2_MS(mainCOUNTER_FREQUENCY_MS)) == 0) {


                        //test_r
                        //b=test_math();
                        c=sin(b/2);
						#if defined(RBLE_UART_DEBUG)
                        //printf("test_r b=%d",c);
                        #endif

					#if 1
						if(rble_led1_opend)
						{
							rble_close_led1();
						}
						else
						{
							rble_open_led1();
						}
					#endif
                        
                }
        }
}
static void system_init( void *pvParameters )
{
        OS_TASK handle;
OS_TASK task_template = NULL;
#if defined CONFIG_RETARGET
        extern void retarget_init(void);
#endif

        /* Prepare clocks. Note: cm_cpu_clk_set() and cm_sys_clk_set() can be called only from a
         * task since they will suspend the task until the XTAL16M has settled and, maybe, the PLL
         * is locked.
         */
        cm_sys_clk_init(sysclk_XTAL16M);
        cm_apb_set_clock_divider(apb_div1);
        cm_ahb_set_clock_divider(ahb_div1);
        cm_lp_clk_init();

        /*
         * Initialize platform watchdog
         */
        sys_watchdog_init();

#if dg_configUSE_WDOG
        // Register the Idle task first.
        idle_task_wdog_id = sys_watchdog_register(false);
        ASSERT_WARNING(idle_task_wdog_id != -1);
        sys_watchdog_configure_idle_id(idle_task_wdog_id);
#endif

         /* Set system clock */
        cm_sys_clk_set(sysclk_XTAL16M);

        /* Prepare the hardware to run this demo. */
        prvSetupHardware();

        /* init resources */
        resource_init();
				ad_i2c_init();
		
		I2C_BUS_INIT(I2C1);

        /* Set the desired sleep mode. */
        pm_set_wakeup_mode(true);

#if defined CONFIG_RETARGET
        retarget_init();
#endif

        pm_set_sleep_mode(pm_mode_extended_sleep);

        /* Initialize BLE Manager */
        ble_mgr_init();

		//test_r
				/* Start sensor task. */
#if 1
				OS_TASK_CREATE("RBLE Sensor",				 /* The text name assigned to the task, for
																   debug only; not used by the kernel. */
							   RbleSensorControlTask,			  /* The function that implements the task. */
							   NULL,							/* The parameter passed to the task. */
							   1536 * OS_STACK_WORD_SIZE,		/* The number of bytes to allocate to the
																   stack of the task. */
							   RBLE_SENSOR_TASK_PRIORITY,/* The priority assigned to the task. */
							   rble_sensor_handle); 						/* The task handle. */
				OS_ASSERT(rble_sensor_handle);
#endif

 
#if 1
		OS_TASK_CREATE( "Template", 		   /* The text name assigned to the task, for
															debug only; not used by the kernel. */
						 prvTemplateTask2,				  /* The function that implements the task. */
						 NULL,							 /* The parameter passed to the task. */
						 200 * OS_STACK_WORD_SIZE,		 /* The number of bytes to allocate to the
															stack of the task. */
						 mainTEMPLATE_TASK_PRIORITY,	 /* The priority assigned to the task. */
						 task_template );						 /* The task handle */
		 OS_ASSERT(task_template);
#endif

        /* Start the PXP reporter application task. */
        OS_TASK_CREATE("PXP Reporter",                  /* The text name assigned to the task, for
                                                           debug only; not used by the kernel. */
                       pxp_reporter_task,               /* The function that implements the task. */
                       NULL,                            /* The parameter passed to the task. */
#if (dg_configDISABLE_BACKGROUND_FLASH_OPS == 1)
                       512,                             /* The number of bytes to allocate to the
                                                           stack of the task. */
#else
                       756,                             /* The number of bytes to allocate to the
                                                           stack of the task. */
#endif
                       mainPXP_REPORTER_TASK_PRIORITY,  /* The priority assigned to the task. */
                       handle);                         /* The task handle. */
        OS_ASSERT(handle);

        /* the work of the SysInit task is done */
        OS_TASK_DELETE(OS_GET_CURRENT_TASK());
}

/**
 * @brief BLE FW demo main creates a BLE task
 */
int main( void )
{
        OS_TASK handle;
        OS_BASE_TYPE status __attribute__((unused));

        cm_clk_init_low_level();                          /* Basic clock initializations. */

        /* Start SysInit task. */
        status = OS_TASK_CREATE("SysInit",                /* The text name assigned to the task, for
                                                             debug only; not used by the kernel. */
                                system_init,              /* The System Initialization task. */
                                ( void * ) 0,             /* The parameter passed to the task. */
                                1024,                     /* The number of bytes to allocate to the
                                                             stack of the task. */
                                OS_TASK_PRIORITY_HIGHEST, /* The priority assigned to the task. */
                                handle );                 /* The task handle */
        OS_ASSERT(status == OS_TASK_CREATE_SUCCESS);


        /* Start the tasks and timer running. */
        vTaskStartScheduler();

        /* If all is well, the scheduler will now be running, and the following
        line will never be reached.  If the following line does execute, then
        there was insufficient FreeRTOS heap memory available for the idle and/or
        timer tasks to be created.  See the memory management section on the
        FreeRTOS web site for more details. */
        for( ;; );
}

static void periph_init(void)
{
#if defined CONFIG_RETARGET
        /*
         * Workaround for JLink emulated serial port.
         *
         * JLink serial port does not set its output UART pin high (UART idle state) unless
         * there is something transmitted from PC to board.
         * Pin state is kept by level shifter low after board reset.
         * Configuring pin as UART_RX does not turn on pull up resistor, hence RX line stays low
         * and this state is usually detected as break condition.
         * With low state on UART RX, configuration of UART is unsuccessful: as soon as baud rate
         * is set up UART goes into busy state, all other settings are ignored.
         *
         * Workaround sets up pin that will be used as UART RX as output with high state.
         * This will result in level shifter holding this state until JLink starts to drive this
         * line for transmission.
         */
        hw_gpio_configure_pin(HW_GPIO_PORT_2, HW_GPIO_PIN_3, HW_GPIO_MODE_OUTPUT,
                                                                        HW_GPIO_FUNC_GPIO, 1);

        hw_gpio_set_pin_function(HW_GPIO_PORT_1, HW_GPIO_PIN_3, HW_GPIO_MODE_OUTPUT,
                                                                        HW_GPIO_FUNC_UART2_TX);
        hw_gpio_set_pin_function(HW_GPIO_PORT_2, HW_GPIO_PIN_3, HW_GPIO_MODE_OUTPUT,
                                                                        HW_GPIO_FUNC_UART2_RX);
#endif

hw_gpio_configure(shoes_gpio_cfg);


        /* I2C1 */
        hw_gpio_configure_pin_power(I2C1_SCL_PORT        , I2C1_SCL_PIN         , HW_GPIO_POWER_VDD1V8P);
        hw_gpio_configure_pin_power(I2C1_SDA_PORT        , I2C1_SDA_PIN         , HW_GPIO_POWER_VDD1V8P);
		
		
		#if 1
        /* peripherals initialization */

        I2C_DEVICE_INIT(ICM20648_ACC);
        I2C_DEVICE_INIT(ICM20648_GRY);
		I2C_DEVICE_INIT(AK09916_MAG);

       // fxl6408_init();
        //display_init();
        //la66002_init();

#endif	   

}

static void prvSetupHardware( void )
{
#if mainCHECK_INTERRUPT_STACK == 1
        extern unsigned long _vStackTop[], _pvHeapStart[];
        unsigned long ulInterruptStackSize;
#endif

        /* Init hardware */
        pm_system_init(periph_init);

#if mainCHECK_INTERRUPT_STACK == 1
        /* The size of the stack used by main and interrupts is not defined in
           the linker, but just uses whatever RAM is left.  Calculate the amount of
           RAM available for the main/interrupt/system stack, and check it against
           a reasonable number.  If this assert is hit then it is likely you don't
           have enough stack to start the kernel, or to allow interrupts to nest.
           Note - this is separate to the stacks that are used by tasks.  The stacks
           that are used by tasks are automatically checked if
           configCHECK_FOR_STACK_OVERFLOW is not 0 in FreeRTOSConfig.h - but the stack
           used by interrupts is not.  Reducing the conifgTOTAL_HEAP_SIZE setting will
           increase the stack available to main() and interrupts. */
        ulInterruptStackSize = ( ( unsigned long ) _vStackTop ) - ( ( unsigned long ) _pvHeapStart );
        OS_ASSERT( ulInterruptStackSize > 350UL );

        /* Fill the stack used by main() and interrupts to a known value, so its 
           use can be manually checked. */
        memcpy( ( void * ) _pvHeapStart, ucExpectedInterruptStackValues, sizeof( ucExpectedInterruptStackValues ) );
#endif
}

/**
 * @brief Malloc fail hook
 */
void vApplicationMallocFailedHook( void )
{
        /* vApplicationMallocFailedHook() will only be called if
	configUSE_MALLOC_FAILED_HOOK is set to 1 in FreeRTOSConfig.h.  It is a hook
	function that will get called if a call to pvPortMalloc() fails.
	pvPortMalloc() is called internally by the kernel whenever a task, queue,
	timer or semaphore is created.  It is also called by various parts of the
	demo application.  If heap_1.c or heap_2.c are used, then the size of the
	heap available to pvPortMalloc() is defined by configTOTAL_HEAP_SIZE in
	FreeRTOSConfig.h, and the xPortGetFreeHeapSize() API function can be used
	to query the size of free heap space that remains (although it does not
	provide information on how the remaining heap might be fragmented). */
        taskDISABLE_INTERRUPTS();
        for( ;; );
}

/**
 * @brief Application idle task hook
 */
void vApplicationIdleHook( void )
{
        /* vApplicationIdleHook() will only be called if configUSE_IDLE_HOOK is set
           to 1 in FreeRTOSConfig.h.  It will be called on each iteration of the idle
           task. It is essential that code added to this hook function never attempts
           to block in any way (for example, call xQueueReceive() with a block time
           specified, or call vTaskDelay()).  If the application makes use of the
           vTaskDelete() API function (as this demo application does) then it is also
           important that vApplicationIdleHook() is permitted to return to its calling
           function, because it is the responsibility of the idle task to clean up
           memory allocated by the kernel to any task that has since been deleted. */

#if (dg_configTRACK_OS_HEAP == 1)
        OS_BASE_TYPE i = 0;
        OS_BASE_TYPE uxMinimumEverFreeHeapSize;

        // Generate raw status information about each task.
        UBaseType_t uxNbOfTaskEntries = uxTaskGetSystemState(pxTaskStatusArray,
                                                        mainMAX_NB_OF_TASKS, &ulTotalRunTime);

        for (i = 0; i < uxNbOfTaskEntries; i++) {
                /* Check Free Stack*/
                OS_BASE_TYPE uxStackHighWaterMark;

                uxStackHighWaterMark = uxTaskGetStackHighWaterMark(pxTaskStatusArray[i].xHandle);
                OS_ASSERT(uxStackHighWaterMark >= mainMIN_STACK_GUARD_SIZE);
        }

        /* Check Minimum Ever Free Heap against defined guard. */
        uxMinimumEverFreeHeapSize = xPortGetMinimumEverFreeHeapSize();
        OS_ASSERT(uxMinimumEverFreeHeapSize >= mainTOTAL_HEAP_SIZE_GUARD);
#endif /* (dg_configTRACK_OS_HEAP == 1) */

#if dg_configUSE_WDOG
        sys_watchdog_notify(idle_task_wdog_id);
#endif
}

/**
 * @brief Application stack overflow hook
 */
void vApplicationStackOverflowHook( OS_TASK pxTask, char *pcTaskName )
{
        ( void ) pcTaskName;
        ( void ) pxTask;

        /* Run time stack overflow checking is performed if
	configCHECK_FOR_STACK_OVERFLOW is defined to 1 or 2.  This hook
	function is called if a stack overflow is detected. */
        taskDISABLE_INTERRUPTS();
        for( ;; );
}

/**
 * @brief Application tick hook
 */
void vApplicationTickHook( void )
{
#if mainCHECK_INTERRUPT_STACK == 1
        extern unsigned long _pvHeapStart[];

        /* This function will be called by each tick interrupt if
	configUSE_TICK_HOOK is set to 1 in FreeRTOSConfig.h.  User code can be
	added here, but the tick hook is called from an interrupt context, so
	code must not attempt to block, and only the interrupt safe FreeRTOS API
	functions can be used (those that end in FromISR()). */

        /* Manually check the last few bytes of the interrupt stack to check they
	have not been overwritten.  Note - the task stacks are automatically
	checked for overflow if configCHECK_FOR_STACK_OVERFLOW is set to 1 or 2
	in FreeRTOSConifg.h, but the interrupt stack is not. */
        OS_ASSERT( memcmp( ( void * ) _pvHeapStart, ucExpectedInterruptStackValues, sizeof( ucExpectedInterruptStackValues ) ) == 0U );
#endif /* mainCHECK_INTERRUPT_STACK */
}


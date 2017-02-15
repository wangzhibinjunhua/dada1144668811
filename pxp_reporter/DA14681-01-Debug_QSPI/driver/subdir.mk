################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
../driver/inv_mems_augmented_sensors.c \
../driver/inv_mems_base_control.c \
../driver/inv_mems_base_control_20609.c \
../driver/inv_mems_base_driver.c \
../driver/inv_mems_base_driver_20609.c \
../driver/inv_mems_data_converter.c \
../driver/inv_mems_load_firmware.c \
../driver/inv_mems_mpu_fifo_control.c \
../driver/inv_mems_mpu_selftest.c \
../driver/inv_mems_secondary_transport.c \
../driver/inv_mems_slave_compass.c \
../driver/inv_mems_slave_pressure.c \
../driver/inv_mems_transport.c 

OBJS += \
./driver/inv_mems_augmented_sensors.o \
./driver/inv_mems_base_control.o \
./driver/inv_mems_base_control_20609.o \
./driver/inv_mems_base_driver.o \
./driver/inv_mems_base_driver_20609.o \
./driver/inv_mems_data_converter.o \
./driver/inv_mems_load_firmware.o \
./driver/inv_mems_mpu_fifo_control.o \
./driver/inv_mems_mpu_selftest.o \
./driver/inv_mems_secondary_transport.o \
./driver/inv_mems_slave_compass.o \
./driver/inv_mems_slave_pressure.o \
./driver/inv_mems_transport.o 

C_DEPS += \
./driver/inv_mems_augmented_sensors.d \
./driver/inv_mems_base_control.d \
./driver/inv_mems_base_control_20609.d \
./driver/inv_mems_base_driver.d \
./driver/inv_mems_base_driver_20609.d \
./driver/inv_mems_data_converter.d \
./driver/inv_mems_load_firmware.d \
./driver/inv_mems_mpu_fifo_control.d \
./driver/inv_mems_mpu_selftest.d \
./driver/inv_mems_secondary_transport.d \
./driver/inv_mems_slave_compass.d \
./driver/inv_mems_slave_pressure.d \
./driver/inv_mems_transport.d 


# Each subdirectory must supply rules for building sources it contributes
driver/%.o: ../driver/%.c
	@echo 'Building file: $<'
	@echo 'Invoking: Cross ARM C Compiler'
	arm-none-eabi-gcc -mcpu=cortex-m0 -mthumb -Og -fmessage-length=0 -fsigned-char -ffunction-sections -fdata-sections -Wall  -g3 -Ddg_configBLACK_ORCA_IC_REV=BLACK_ORCA_IC_REV_A -Ddg_configBLACK_ORCA_IC_STEP=BLACK_ORCA_IC_STEP_E -I"E:\wang\dialogp\hy_ble\pxp_reporter\config" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\config" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\include" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\include\adapter" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\include\manager" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\config" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\att" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\att\attc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\att\attm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\att\atts" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gap" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gap\gapc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gap\gapm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gatt" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gatt\gattc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\gatt\gattm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\l2c\l2cc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\l2c\l2cm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\smp" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\smp\smpc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\host\smp\smpm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\hl\src\rwble_hl" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\ll\src\controller\em" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\ll\src\controller\llc" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\ll\src\controller\lld" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\ll\src\controller\llm" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\ll\src\rwble" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ble\profiles" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\ea\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\em\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\hci\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\ip\hci\src" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\common\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\dbg\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\gtl\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\gtl\src" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\h4tl\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\ke\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\ke\src" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\nvds\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\modules\rwip\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\arch" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\arch\ll\armgcc_4_8" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\arch\boot\armgcc_4_8" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\arch\compiler\armgcc_4_8" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\build\ble-full\reg\fw" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\driver\flash" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\driver\reg" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\driver\rf" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble\src\stack\plf\black_orca\src\driver\rf\api" -I"E:\wang\dialogp\hy_ble\sdk\interfaces\ble_services\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\config" -I"E:\wang\dialogp\hy_ble\sdk\bsp\system\sys_man\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\free_rtos\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\osal" -I"E:\wang\dialogp\hy_ble\sdk\bsp\peripherals\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\memory\include" -I"E:\wang\dialogp\hy_ble\sdk\bsp\adapters\include" -I../../sdk/interfaces/ble_stack/ -I"E:\wang\dialogp\hy_ble\pxp_reporter\qfplib" -include"E:\wang\dialogp\hy_ble\pxp_reporter\config\custom_config_qspi.h" -std=gnu11 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" -c -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '



/*
 * data.h
 *
 *  Created on: 2017��2��27��
 *      Author: Administrator
 */
#if defined(BLE_USE_DATA_V1)
#ifndef DATA_H_
#define DATA_H_

void detect_new_step(float values);


#if 0
#define RBLE_RESULT_DATA_PATITION_SIZE  (0x005000)
#define RBLE_RESULT_DATA_BUF_LENGTH    32
#define RBLE_RESULT_FLOAT_SIZE   4
#define RBLE_RESULT_INT_SIZE   4

#define RBLE_RESULT_DATA_LABLE_LENGTH  2
#define RBLE_RESULT_DATA_LABLE_SC "sc" //step count
#define RBLE_RESULT_DATA_LABLE_RC "rc" //run count
#define RBLE_RESULT_DATA_LABLE_DC "dc" //dash count
#endif




#endif /* DATA_H_ */
#endif

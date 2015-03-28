#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_isOperator_gives_1_for_plus_sign,test_isOperator_gives_1_for_minus_sign,test_isOperator_gives_1_for_multiply_sign,test_isOperator_gives_1_for_devision_sign,test_isOperator_gives_0_for_a,test_isOperator_gives_0_for_A,test_isOperator_gives_0_for_add_the_rate_sign,test_isOperator_gives_0_for_1,test_isOperator_gives_0_for_0,test_isOprand_gives_1_for_0,test_isOprand_gives_1_for_1,test_isOprand_gives_1_for_2,test_isOprand_gives_1_for_3,test_isOprand_gives_1_for_4,test_isOprand_gives_1_for_5,test_isOprand_gives_1_for_6,test_isOprand_gives_1_for_7,test_isOprand_gives_1_for_8,test_isOprand_gives_1_for_9,test_isOprand_gives_0_for_plus_sign,test_isOprand_gives_0_for_minus_sign,test_isOprand_gives_0_for_multiply_sign,test_isOprand_gives_0_for_devision_sign,test_isOprand_gives_0_for_a,test_isOprand_gives_0_for_A,test_isOprand_gives_0_for_ampersand_sign,test_operation_gives_8_for_6_2_and_plus_sign,test_operation_gives_4_for_6_2_and_minus_sign,test_operation_gives_12_for_6_2_and_multiply_sign,test_operation_gives_3_for_6_2_and_devision_sign,test_operation_gives_30_for_20_10_and_plus_sign,test_operation_gives_10_for_20_10_and_minus_sign,test_operation_gives_200_for_20_10_and_multiply_sign,test_operation_gives_2_for_20_10_and_devision_sign,test_operation_gives_0_for_6_2_and_ampersand_sign,test_operation_gives_0_for_6_2_and_add_the_rate_sign,test_intToStr_gives_0_as_string,test_intToStr_gives_1_as_string,test_intToStr_gives_12_as_string,test_intToStr_gives_123_as_string,test_intToStr_gives_1234_as_string,test_intToStr_gives_12345_as_string,test_intToStr_gives_123456_as_string,test_intToStr_gives_1234567_as_string,test_intToStr_gives_12345678_as_string,test_intToStr_gives_123456789_as_string,test_intToStr_gives_1234567890_as_string,test_makeOneNumber_concates_b_to_a_and_gives_ab,test_makeOneNumber_concates_c_to_ab_and_gives_abc,test_makeOneNumber_concates_d_to_abc_and_gives_abcd,test_makeOneNumber_concates_e_to_abcd_and_gives_abcde,test_makeOneNumber_concates_2_to_1_and_gives_12,test_makeOneNumber_concates_3_to_12_and_gives_12,test_makeOneNumber_concates_4_to_123_and_gives_1234,test_makeOneNumber_concates_5_to_1234_and_gives_12345,test_makeOneNumber_concates_6_to_12345_and_gives_123456,test_makeOneNumber_concates_7_to_123456_and_gives_1234567,test_makeOneNumber_concates_8_to_1234567_and_gives_12345678,test_makeOneNumber_concates_9_to_12345678_and_gives_123456789,test_makeOneNumber_concates_0_to_123456789_and_gives_1234567890,test_evaluation_evaluates_the_expression_2_3_p_and_gives_5,test_evaluation_evaluates_the_expression_2_3_n_and_gives_n_1,test_evaluation_evaluates_the_expression_2_3_m_and_gives_6,test_evaluation_evaluates_the_expression_6_2_d_and_gives_3,test_evaluation_evaluates_the_expression_2_3_4_p_p_and_gives_10,test_evaluation_evaluates_the_expression_22_3_4_p_p_and_gives_30,test_evaluation_evaluates_the_expression_22_3_4_p_n_and_gives_14,test_evaluation_evaluates_the_expression_22_3_4_n_p_and_gives_20,test_evaluation_evaluates_the_expression_2_3_4_m_m_and_gives_30,test_evaluation_evaluates_the_expression_2_2_2_p_2_p_p_and_gives_8,test_evaluation_evaluates_the_expression_2_2_n_2_2_2_m_2_n_n_n_and_gives_4,test_noOFOprands_gives_1_for_1_p,test_noOFOprands_gives_2_for_1_1_p,test_noOFOprands_gives_3_for_1_1_1,test_noOFOprands_gives_1_for_1_p_n_p,test_noOFOprands_gives_5_for_1_1_1_n_1_1_p_m_d,test_noOFOprands_gives_4_for_1_1_n_1_1_p_m,test_noOFOprands_gives_2_for_1_p_d_n_m_1_p_m_d,test_noOFOprands_gives_6_for_1_2_3_4_5_6_p_p_n_p_n,test_noOFOprands_gives_1_for_11_p_n_p,test_noOFOprands_gives_3_for_11_22_45_p_n,test_noOFOprands_gives_2_for_11_22_p,test_noOFOperators_gives_1_for_1_p,test_noOFOperators_gives_1_for_1_1_p,test_noOFOperators_gives_0_for_1_1_1,test_noOFOperators_gives_3_for_1_p_n_p,test_noOFOperators_gives_4_for_1_1_1_n_1_1_p_m_d,test_noOFOperators_gives_3_for_1_1_n_1_1_p_m,test_noOFOperators_gives_7_for_1_p_d_n_m_1_p_m_d,test_noOFOperators_gives_5_for_1_2_3_4_5_6_p_p_n_p_n,test_evaluate_evaluates_the_expression_2_3_p_and_gives_5_as_status_and_0_as_error,test_evaluate_evaluates_the_expression_2_3_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error,test_evaluate_evaluates_the_expression_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error,test_evaluate_evaluates_the_expression_2_3_5_p_p_and_gives_10_as_status_and_0_as_error,test_evaluate_evaluates_the_expression_2_3_5_4_p_p_n_and_gives_10_as_status_and_0_as_error,test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value,test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value_when_stack_has_three_datas,test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_substacted_value,test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_multiplied_value,test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_devision_value,test_infixToPostfix_3_4_5_m_6_d_p_gives_3_p_4_m_5_d_6,test_infixToPostfix_gives_postfix_for_op_300_p_23_cp_m_op_43_m_21_cp_d_op_84_p_7cp,test_infixToPostfix_gives_postFix_for_op_4_p_8_m_op_6_s_5_cp_d_op_op_3_s_2_cp_m_op_2_p_2_cp_cp;
Test test[] = {"test_isOperator_gives_1_for_plus_sign",test_isOperator_gives_1_for_plus_sign,"test_isOperator_gives_1_for_minus_sign",test_isOperator_gives_1_for_minus_sign,"test_isOperator_gives_1_for_multiply_sign",test_isOperator_gives_1_for_multiply_sign,"test_isOperator_gives_1_for_devision_sign",test_isOperator_gives_1_for_devision_sign,"test_isOperator_gives_0_for_a",test_isOperator_gives_0_for_a,"test_isOperator_gives_0_for_A",test_isOperator_gives_0_for_A,"test_isOperator_gives_0_for_add_the_rate_sign",test_isOperator_gives_0_for_add_the_rate_sign,"test_isOperator_gives_0_for_1",test_isOperator_gives_0_for_1,"test_isOperator_gives_0_for_0",test_isOperator_gives_0_for_0,"test_isOprand_gives_1_for_0",test_isOprand_gives_1_for_0,"test_isOprand_gives_1_for_1",test_isOprand_gives_1_for_1,"test_isOprand_gives_1_for_2",test_isOprand_gives_1_for_2,"test_isOprand_gives_1_for_3",test_isOprand_gives_1_for_3,"test_isOprand_gives_1_for_4",test_isOprand_gives_1_for_4,"test_isOprand_gives_1_for_5",test_isOprand_gives_1_for_5,"test_isOprand_gives_1_for_6",test_isOprand_gives_1_for_6,"test_isOprand_gives_1_for_7",test_isOprand_gives_1_for_7,"test_isOprand_gives_1_for_8",test_isOprand_gives_1_for_8,"test_isOprand_gives_1_for_9",test_isOprand_gives_1_for_9,"test_isOprand_gives_0_for_plus_sign",test_isOprand_gives_0_for_plus_sign,"test_isOprand_gives_0_for_minus_sign",test_isOprand_gives_0_for_minus_sign,"test_isOprand_gives_0_for_multiply_sign",test_isOprand_gives_0_for_multiply_sign,"test_isOprand_gives_0_for_devision_sign",test_isOprand_gives_0_for_devision_sign,"test_isOprand_gives_0_for_a",test_isOprand_gives_0_for_a,"test_isOprand_gives_0_for_A",test_isOprand_gives_0_for_A,"test_isOprand_gives_0_for_ampersand_sign",test_isOprand_gives_0_for_ampersand_sign,"test_operation_gives_8_for_6_2_and_plus_sign",test_operation_gives_8_for_6_2_and_plus_sign,"test_operation_gives_4_for_6_2_and_minus_sign",test_operation_gives_4_for_6_2_and_minus_sign,"test_operation_gives_12_for_6_2_and_multiply_sign",test_operation_gives_12_for_6_2_and_multiply_sign,"test_operation_gives_3_for_6_2_and_devision_sign",test_operation_gives_3_for_6_2_and_devision_sign,"test_operation_gives_30_for_20_10_and_plus_sign",test_operation_gives_30_for_20_10_and_plus_sign,"test_operation_gives_10_for_20_10_and_minus_sign",test_operation_gives_10_for_20_10_and_minus_sign,"test_operation_gives_200_for_20_10_and_multiply_sign",test_operation_gives_200_for_20_10_and_multiply_sign,"test_operation_gives_2_for_20_10_and_devision_sign",test_operation_gives_2_for_20_10_and_devision_sign,"test_operation_gives_0_for_6_2_and_ampersand_sign",test_operation_gives_0_for_6_2_and_ampersand_sign,"test_operation_gives_0_for_6_2_and_add_the_rate_sign",test_operation_gives_0_for_6_2_and_add_the_rate_sign,"test_intToStr_gives_0_as_string",test_intToStr_gives_0_as_string,"test_intToStr_gives_1_as_string",test_intToStr_gives_1_as_string,"test_intToStr_gives_12_as_string",test_intToStr_gives_12_as_string,"test_intToStr_gives_123_as_string",test_intToStr_gives_123_as_string,"test_intToStr_gives_1234_as_string",test_intToStr_gives_1234_as_string,"test_intToStr_gives_12345_as_string",test_intToStr_gives_12345_as_string,"test_intToStr_gives_123456_as_string",test_intToStr_gives_123456_as_string,"test_intToStr_gives_1234567_as_string",test_intToStr_gives_1234567_as_string,"test_intToStr_gives_12345678_as_string",test_intToStr_gives_12345678_as_string,"test_intToStr_gives_123456789_as_string",test_intToStr_gives_123456789_as_string,"test_intToStr_gives_1234567890_as_string",test_intToStr_gives_1234567890_as_string,"test_makeOneNumber_concates_b_to_a_and_gives_ab",test_makeOneNumber_concates_b_to_a_and_gives_ab,"test_makeOneNumber_concates_c_to_ab_and_gives_abc",test_makeOneNumber_concates_c_to_ab_and_gives_abc,"test_makeOneNumber_concates_d_to_abc_and_gives_abcd",test_makeOneNumber_concates_d_to_abc_and_gives_abcd,"test_makeOneNumber_concates_e_to_abcd_and_gives_abcde",test_makeOneNumber_concates_e_to_abcd_and_gives_abcde,"test_makeOneNumber_concates_2_to_1_and_gives_12",test_makeOneNumber_concates_2_to_1_and_gives_12,"test_makeOneNumber_concates_3_to_12_and_gives_12",test_makeOneNumber_concates_3_to_12_and_gives_12,"test_makeOneNumber_concates_4_to_123_and_gives_1234",test_makeOneNumber_concates_4_to_123_and_gives_1234,"test_makeOneNumber_concates_5_to_1234_and_gives_12345",test_makeOneNumber_concates_5_to_1234_and_gives_12345,"test_makeOneNumber_concates_6_to_12345_and_gives_123456",test_makeOneNumber_concates_6_to_12345_and_gives_123456,"test_makeOneNumber_concates_7_to_123456_and_gives_1234567",test_makeOneNumber_concates_7_to_123456_and_gives_1234567,"test_makeOneNumber_concates_8_to_1234567_and_gives_12345678",test_makeOneNumber_concates_8_to_1234567_and_gives_12345678,"test_makeOneNumber_concates_9_to_12345678_and_gives_123456789",test_makeOneNumber_concates_9_to_12345678_and_gives_123456789,"test_makeOneNumber_concates_0_to_123456789_and_gives_1234567890",test_makeOneNumber_concates_0_to_123456789_and_gives_1234567890,"test_evaluation_evaluates_the_expression_2_3_p_and_gives_5",test_evaluation_evaluates_the_expression_2_3_p_and_gives_5,"test_evaluation_evaluates_the_expression_2_3_n_and_gives_n_1",test_evaluation_evaluates_the_expression_2_3_n_and_gives_n_1,"test_evaluation_evaluates_the_expression_2_3_m_and_gives_6",test_evaluation_evaluates_the_expression_2_3_m_and_gives_6,"test_evaluation_evaluates_the_expression_6_2_d_and_gives_3",test_evaluation_evaluates_the_expression_6_2_d_and_gives_3,"test_evaluation_evaluates_the_expression_2_3_4_p_p_and_gives_10",test_evaluation_evaluates_the_expression_2_3_4_p_p_and_gives_10,"test_evaluation_evaluates_the_expression_22_3_4_p_p_and_gives_30",test_evaluation_evaluates_the_expression_22_3_4_p_p_and_gives_30,"test_evaluation_evaluates_the_expression_22_3_4_p_n_and_gives_14",test_evaluation_evaluates_the_expression_22_3_4_p_n_and_gives_14,"test_evaluation_evaluates_the_expression_22_3_4_n_p_and_gives_20",test_evaluation_evaluates_the_expression_22_3_4_n_p_and_gives_20,"test_evaluation_evaluates_the_expression_2_3_4_m_m_and_gives_30",test_evaluation_evaluates_the_expression_2_3_4_m_m_and_gives_30,"test_evaluation_evaluates_the_expression_2_2_2_p_2_p_p_and_gives_8",test_evaluation_evaluates_the_expression_2_2_2_p_2_p_p_and_gives_8,"test_evaluation_evaluates_the_expression_2_2_n_2_2_2_m_2_n_n_n_and_gives_4",test_evaluation_evaluates_the_expression_2_2_n_2_2_2_m_2_n_n_n_and_gives_4,"test_noOFOprands_gives_1_for_1_p",test_noOFOprands_gives_1_for_1_p,"test_noOFOprands_gives_2_for_1_1_p",test_noOFOprands_gives_2_for_1_1_p,"test_noOFOprands_gives_3_for_1_1_1",test_noOFOprands_gives_3_for_1_1_1,"test_noOFOprands_gives_1_for_1_p_n_p",test_noOFOprands_gives_1_for_1_p_n_p,"test_noOFOprands_gives_5_for_1_1_1_n_1_1_p_m_d",test_noOFOprands_gives_5_for_1_1_1_n_1_1_p_m_d,"test_noOFOprands_gives_4_for_1_1_n_1_1_p_m",test_noOFOprands_gives_4_for_1_1_n_1_1_p_m,"test_noOFOprands_gives_2_for_1_p_d_n_m_1_p_m_d",test_noOFOprands_gives_2_for_1_p_d_n_m_1_p_m_d,"test_noOFOprands_gives_6_for_1_2_3_4_5_6_p_p_n_p_n",test_noOFOprands_gives_6_for_1_2_3_4_5_6_p_p_n_p_n,"test_noOFOprands_gives_1_for_11_p_n_p",test_noOFOprands_gives_1_for_11_p_n_p,"test_noOFOprands_gives_3_for_11_22_45_p_n",test_noOFOprands_gives_3_for_11_22_45_p_n,"test_noOFOprands_gives_2_for_11_22_p",test_noOFOprands_gives_2_for_11_22_p,"test_noOFOperators_gives_1_for_1_p",test_noOFOperators_gives_1_for_1_p,"test_noOFOperators_gives_1_for_1_1_p",test_noOFOperators_gives_1_for_1_1_p,"test_noOFOperators_gives_0_for_1_1_1",test_noOFOperators_gives_0_for_1_1_1,"test_noOFOperators_gives_3_for_1_p_n_p",test_noOFOperators_gives_3_for_1_p_n_p,"test_noOFOperators_gives_4_for_1_1_1_n_1_1_p_m_d",test_noOFOperators_gives_4_for_1_1_1_n_1_1_p_m_d,"test_noOFOperators_gives_3_for_1_1_n_1_1_p_m",test_noOFOperators_gives_3_for_1_1_n_1_1_p_m,"test_noOFOperators_gives_7_for_1_p_d_n_m_1_p_m_d",test_noOFOperators_gives_7_for_1_p_d_n_m_1_p_m_d,"test_noOFOperators_gives_5_for_1_2_3_4_5_6_p_p_n_p_n",test_noOFOperators_gives_5_for_1_2_3_4_5_6_p_p_n_p_n,"test_evaluate_evaluates_the_expression_2_3_p_and_gives_5_as_status_and_0_as_error",test_evaluate_evaluates_the_expression_2_3_p_and_gives_5_as_status_and_0_as_error,"test_evaluate_evaluates_the_expression_2_3_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error",test_evaluate_evaluates_the_expression_2_3_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error,"test_evaluate_evaluates_the_expression_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error",test_evaluate_evaluates_the_expression_2_3_p_p_and_gives_neg_1_as_status_and_1_as_error,"test_evaluate_evaluates_the_expression_2_3_5_p_p_and_gives_10_as_status_and_0_as_error",test_evaluate_evaluates_the_expression_2_3_5_p_p_and_gives_10_as_status_and_0_as_error,"test_evaluate_evaluates_the_expression_2_3_5_4_p_p_n_and_gives_10_as_status_and_0_as_error",test_evaluate_evaluates_the_expression_2_3_5_4_p_p_n_and_gives_10_as_status_and_0_as_error,"test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value",test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value,"test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value_when_stack_has_three_datas",test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_added_value_when_stack_has_three_datas,"test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_substacted_value",test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_substacted_value,"test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_multiplied_value",test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_multiplied_value,"test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_devision_value",test_popTopTwoElePushRes_pops_top_two_datas_and_pushes_their_devision_value,"test_infixToPostfix_3_4_5_m_6_d_p_gives_3_p_4_m_5_d_6",test_infixToPostfix_3_4_5_m_6_d_p_gives_3_p_4_m_5_d_6,"test_infixToPostfix_gives_postfix_for_op_300_p_23_cp_m_op_43_m_21_cp_d_op_84_p_7cp",test_infixToPostfix_gives_postfix_for_op_300_p_23_cp_m_op_43_m_21_cp_d_op_84_p_7cp,"test_infixToPostfix_gives_postFix_for_op_4_p_8_m_op_6_s_5_cp_d_op_op_3_s_2_cp_m_op_2_p_2_cp_cp",test_infixToPostfix_gives_postFix_for_op_4_p_8_m_op_6_s_5_cp_d_op_op_3_s_2_cp_m_op_2_p_2_cp_cp};
char testFileName[] = {"rpnTest.c"};
void _setup(){/*CALL_SETUP*/}
void _teardown(){/*CALL_TEARDOWN*/}
void fixtureSetup(){}
void fixtureTearDown(){}
//code to be updated ends

int testCount;
int passCount;
int currentTestFailed;

int assert_expr(int expr, const char* fileName, int lineNumber, const char* expression){
	if(expr) return 0;
	currentTestFailed = 1;
	printf("\t %s : failed at %s:%d\n",expression, fileName,lineNumber);
	return 1;
}
int assert_equal(int val1, int val2, const char* fileName, int lineNumber,const char* expr1,const char* expr2){
	if(val1 == val2) return 0;
	currentTestFailed = 1;
	printf("\t %d == %d: failed in assertEqual(%s,%s) at %s:%d\n",val1,val2,expr1,expr2, fileName,lineNumber);
	return 1;
}

void runTest(char* name, TestFn test){
	testCount++,currentTestFailed=0;
	printf("**  %s\n",name);
	_setup();
		test();
	_teardown();
	if(!currentTestFailed) passCount++;	
}
int main(int argc, char const *argv[]){		
	int i,total = sizeof(test)/sizeof(Test);	
	fixtureSetup();
	testCount=0,passCount=0;
	printf("**------ %s ------\n",testFileName);
	for (i = 0; i < total; ++i)
		runTest(test[i].name,test[i].fn);	
	printf("** Ran %d tests passed %d failed %d\n",testCount,passCount,testCount-passCount);
	fixtureTearDown();	
	return 0;
}
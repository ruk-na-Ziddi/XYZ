#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_Create_creates_new_array_of_float_containing_all_elements_0,test_Create_creates_new_charArray_containing_all_elements_0_and_gives_0_for_different_lengths,test_Create_creates_new_doubleArray_containing_all_elements_0_and_gives_0_for_different_lengths,test_Create_creates_new_intArray_containing_all_elements_0_and_gives_0_for_different_lengths,test_Create_creates_new_floatArray_containing_all_elements_0_and_gives_0_for_different_lengths,test_filter_filters_the_util_intArray_which_matches_the_criteria,test_filter_filters_the_util_floatArray_which_matches_the_criteria,test_findFirst_gives_occurence_of_first_element_in_floatArray_greaterThan5,test_findIndex_returns_4_for_float_array_if_search_element_is_at_4th_location,test_findLast_gives_occurence_of_last_element_in_floatArray_greaterThan5;
Test test[] = {"test_Create_creates_new_array_of_float_containing_all_elements_0",test_Create_creates_new_array_of_float_containing_all_elements_0,"test_Create_creates_new_charArray_containing_all_elements_0_and_gives_0_for_different_lengths",test_Create_creates_new_charArray_containing_all_elements_0_and_gives_0_for_different_lengths,"test_Create_creates_new_doubleArray_containing_all_elements_0_and_gives_0_for_different_lengths",test_Create_creates_new_doubleArray_containing_all_elements_0_and_gives_0_for_different_lengths,"test_Create_creates_new_intArray_containing_all_elements_0_and_gives_0_for_different_lengths",test_Create_creates_new_intArray_containing_all_elements_0_and_gives_0_for_different_lengths,"test_Create_creates_new_floatArray_containing_all_elements_0_and_gives_0_for_different_lengths",test_Create_creates_new_floatArray_containing_all_elements_0_and_gives_0_for_different_lengths,"test_filter_filters_the_util_intArray_which_matches_the_criteria",test_filter_filters_the_util_intArray_which_matches_the_criteria,"test_filter_filters_the_util_floatArray_which_matches_the_criteria",test_filter_filters_the_util_floatArray_which_matches_the_criteria,"test_findFirst_gives_occurence_of_first_element_in_floatArray_greaterThan5",test_findFirst_gives_occurence_of_first_element_in_floatArray_greaterThan5,"test_findIndex_returns_4_for_float_array_if_search_element_is_at_4th_location",test_findIndex_returns_4_for_float_array_if_search_element_is_at_4th_location,"test_findLast_gives_occurence_of_last_element_in_floatArray_greaterThan5",test_findLast_gives_occurence_of_last_element_in_floatArray_greaterThan5};
char testFileName[] = {"kratiTest.c"};
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
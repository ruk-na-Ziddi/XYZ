#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_creatStack_cretes_a_stack_and_sets_its_top_to_NULL,test_push_pushes_an_element_in_the_stack,test_push_pushes_an_char_element_in_the_stack,test_push_pushes_an_char_string_in_the_stack,test_push_pushes_two_char_string_in_the_stack,test_push_pushes_three_char_string_in_the_stack,test_push_pushes_one_char_string_array_in_the_stack,test_push_pushes_two_char_string_array_in_the_stack,test_push_pushes_two_element_in_the_stack,test_push_pushes_two_char_element_in_the_stack,test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top,test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top_for_character_data,test_pop_removes_the_string_from_the_top_of_stack,test_pop_removes_the_array_of_string_from_the_top_of_stack;
Test test[] = {"test_creatStack_cretes_a_stack_and_sets_its_top_to_NULL",test_creatStack_cretes_a_stack_and_sets_its_top_to_NULL,"test_push_pushes_an_element_in_the_stack",test_push_pushes_an_element_in_the_stack,"test_push_pushes_an_char_element_in_the_stack",test_push_pushes_an_char_element_in_the_stack,"test_push_pushes_an_char_string_in_the_stack",test_push_pushes_an_char_string_in_the_stack,"test_push_pushes_two_char_string_in_the_stack",test_push_pushes_two_char_string_in_the_stack,"test_push_pushes_three_char_string_in_the_stack",test_push_pushes_three_char_string_in_the_stack,"test_push_pushes_one_char_string_array_in_the_stack",test_push_pushes_one_char_string_array_in_the_stack,"test_push_pushes_two_char_string_array_in_the_stack",test_push_pushes_two_char_string_array_in_the_stack,"test_push_pushes_two_element_in_the_stack",test_push_pushes_two_element_in_the_stack,"test_push_pushes_two_char_element_in_the_stack",test_push_pushes_two_char_element_in_the_stack,"test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top",test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top,"test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top_for_character_data",test_pop_removes_the_current_top_of_stack_and_sets_previous_member_as_top_for_character_data,"test_pop_removes_the_string_from_the_top_of_stack",test_pop_removes_the_string_from_the_top_of_stack,"test_pop_removes_the_array_of_string_from_the_top_of_stack",test_pop_removes_the_array_of_string_from_the_top_of_stack};
char testFileName[] = {"stackTest.c"};
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
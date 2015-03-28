#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_createBSTree_creates_a_tree_and_sets_its_root_to_NULL,test_createNode_creates_node_and_sets_its_data_to_15_leftNode_rightNode_to_NUll,test_createNode_creates_node_and_sets_its_data_to_150_leftNode_rightNode_to_NUll,test_createNode_creates_node_and_sets_its_data_to_1500_leftNode_rightNode_to_NUll,test_insert_insert_a_data_to_a_new_creted_tree_and_gives_one_on_success,test_insert_inserts_data_in_leftNode_of_root_when_rootdata_is_greter_than_data,test_insert_inserts_data_in_rightNode_of_root_when_rootdata_is_smaller_than_data,test_find_return_the_data_if_given_data_maches_somewhere_in_the_tree,test_find_return_NULL_if_tree_dont_have_any_data,test_find_returns_NULL_if_given_data_is_not_in_the_tree,test_deleteData_deletes_the_data_and_gives_back_the_deleted_value,test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_hahaha,test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_all_value,test_deleteData_gives_NULL_for_when_root_is_NULL,test_deleteData_gives_NULL_for_when_data_is_not_available,test_deleteData_gives_NULL_for_when_data_is_not_available_after_once_deleted,test_deleteData_gives_NULL_for_when_two_data_is_not_available_after_once_deleted;
Test test[] = {"test_createBSTree_creates_a_tree_and_sets_its_root_to_NULL",test_createBSTree_creates_a_tree_and_sets_its_root_to_NULL,"test_createNode_creates_node_and_sets_its_data_to_15_leftNode_rightNode_to_NUll",test_createNode_creates_node_and_sets_its_data_to_15_leftNode_rightNode_to_NUll,"test_createNode_creates_node_and_sets_its_data_to_150_leftNode_rightNode_to_NUll",test_createNode_creates_node_and_sets_its_data_to_150_leftNode_rightNode_to_NUll,"test_createNode_creates_node_and_sets_its_data_to_1500_leftNode_rightNode_to_NUll",test_createNode_creates_node_and_sets_its_data_to_1500_leftNode_rightNode_to_NUll,"test_insert_insert_a_data_to_a_new_creted_tree_and_gives_one_on_success",test_insert_insert_a_data_to_a_new_creted_tree_and_gives_one_on_success,"test_insert_inserts_data_in_leftNode_of_root_when_rootdata_is_greter_than_data",test_insert_inserts_data_in_leftNode_of_root_when_rootdata_is_greter_than_data,"test_insert_inserts_data_in_rightNode_of_root_when_rootdata_is_smaller_than_data",test_insert_inserts_data_in_rightNode_of_root_when_rootdata_is_smaller_than_data,"test_find_return_the_data_if_given_data_maches_somewhere_in_the_tree",test_find_return_the_data_if_given_data_maches_somewhere_in_the_tree,"test_find_return_NULL_if_tree_dont_have_any_data",test_find_return_NULL_if_tree_dont_have_any_data,"test_find_returns_NULL_if_given_data_is_not_in_the_tree",test_find_returns_NULL_if_given_data_is_not_in_the_tree,"test_deleteData_deletes_the_data_and_gives_back_the_deleted_value",test_deleteData_deletes_the_data_and_gives_back_the_deleted_value,"test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_hahaha",test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_hahaha,"test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_all_value",test_deleteData_deletes_the_data_and_gives_back_the_deleted_value_all_value,"test_deleteData_gives_NULL_for_when_root_is_NULL",test_deleteData_gives_NULL_for_when_root_is_NULL,"test_deleteData_gives_NULL_for_when_data_is_not_available",test_deleteData_gives_NULL_for_when_data_is_not_available,"test_deleteData_gives_NULL_for_when_data_is_not_available_after_once_deleted",test_deleteData_gives_NULL_for_when_data_is_not_available_after_once_deleted,"test_deleteData_gives_NULL_for_when_two_data_is_not_available_after_once_deleted",test_deleteData_gives_NULL_for_when_two_data_is_not_available_after_once_deleted};
char testFileName[] = {"BSTreeTest.c"};
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
#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_createList_cretes_a_linked_list_and_sets_its_head_and_tail_to_NULL_and_count_to_0,test_create_node_sets_given_data_as_nodes_data_and_its_next_to_NULL,test_add_to_list_adds_one_node_to_list_and_count_is_1,test_add_to_list_can_add_two_nodes_to_list_then_count_is_2,test_get_first_element_should_give_data_of_the_first_node_of_list,test_get_last_element_should_give_data_of_the_last_node_of_list,test_travese_should_increment_every_node_data_of_list_by_one,test_getElementAt_should_give_the_data_for_given_index,test_getElementAt_should_give_the_data_for_given_index_indexis_2,test_getElementAt_should_give_null_when_index_is_bigger_than_count,test_getElementAt_should_give_null_when_index_is_equal_to_count,test_indexOf_should_give_2_when_given_data_is_3rd_node_data,test_indexOf_should_give_negtive_1_when_given_data_is_not_found,test_deleteElementAt_should_delete_the_node_at_given_index,test_deleteElementAt_should_delete_the_first_node,test_deleteElementA_should_delete_the_first_node,test_deleteElement_should_delete_the_only_node,test_deleteElementA_should_delete_the_second_node_when_only_two_nodes_are_there,test_asArray_puts_all_node_datas_in_an_array,test_filter_puts_only_greter_than_4_node_data_in_filtered_list;
Test test[] = {"test_createList_cretes_a_linked_list_and_sets_its_head_and_tail_to_NULL_and_count_to_0",test_createList_cretes_a_linked_list_and_sets_its_head_and_tail_to_NULL_and_count_to_0,"test_create_node_sets_given_data_as_nodes_data_and_its_next_to_NULL",test_create_node_sets_given_data_as_nodes_data_and_its_next_to_NULL,"test_add_to_list_adds_one_node_to_list_and_count_is_1",test_add_to_list_adds_one_node_to_list_and_count_is_1,"test_add_to_list_can_add_two_nodes_to_list_then_count_is_2",test_add_to_list_can_add_two_nodes_to_list_then_count_is_2,"test_get_first_element_should_give_data_of_the_first_node_of_list",test_get_first_element_should_give_data_of_the_first_node_of_list,"test_get_last_element_should_give_data_of_the_last_node_of_list",test_get_last_element_should_give_data_of_the_last_node_of_list,"test_travese_should_increment_every_node_data_of_list_by_one",test_travese_should_increment_every_node_data_of_list_by_one,"test_getElementAt_should_give_the_data_for_given_index",test_getElementAt_should_give_the_data_for_given_index,"test_getElementAt_should_give_the_data_for_given_index_indexis_2",test_getElementAt_should_give_the_data_for_given_index_indexis_2,"test_getElementAt_should_give_null_when_index_is_bigger_than_count",test_getElementAt_should_give_null_when_index_is_bigger_than_count,"test_getElementAt_should_give_null_when_index_is_equal_to_count",test_getElementAt_should_give_null_when_index_is_equal_to_count,"test_indexOf_should_give_2_when_given_data_is_3rd_node_data",test_indexOf_should_give_2_when_given_data_is_3rd_node_data,"test_indexOf_should_give_negtive_1_when_given_data_is_not_found",test_indexOf_should_give_negtive_1_when_given_data_is_not_found,"test_deleteElementAt_should_delete_the_node_at_given_index",test_deleteElementAt_should_delete_the_node_at_given_index,"test_deleteElementAt_should_delete_the_first_node",test_deleteElementAt_should_delete_the_first_node,"test_deleteElementA_should_delete_the_first_node",test_deleteElementA_should_delete_the_first_node,"test_deleteElement_should_delete_the_only_node",test_deleteElement_should_delete_the_only_node,"test_deleteElementA_should_delete_the_second_node_when_only_two_nodes_are_there",test_deleteElementA_should_delete_the_second_node_when_only_two_nodes_are_there,"test_asArray_puts_all_node_datas_in_an_array",test_asArray_puts_all_node_datas_in_an_array,"test_filter_puts_only_greter_than_4_node_data_in_filtered_list",test_filter_puts_only_greter_than_4_node_data_in_filtered_list};
char testFileName[] = {"linkedListTest.c"};
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
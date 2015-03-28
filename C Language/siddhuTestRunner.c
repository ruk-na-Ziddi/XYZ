#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,teardown,fixtureSetup,fixtureTearDown,test_create_001,test_create_002,test_create_003,test_create_004,test_create_005,test_create_006,test_create_007,test_create_008,test_create_009,test_create_010,test_create_011,test_findLast_returns_the_last_student_who_has_passed_the_exam_struct_array,test_findFirst_returns_the_first_student_who_has_passed_the_exam_struct_array;
Test test[] = {"test_create_001",test_create_001,"test_create_002",test_create_002,"test_create_003",test_create_003,"test_create_004",test_create_004,"test_create_005",test_create_005,"test_create_006",test_create_006,"test_create_007",test_create_007,"test_create_008",test_create_008,"test_create_009",test_create_009,"test_create_010",test_create_010,"test_create_011",test_create_011,"test_findLast_returns_the_last_student_who_has_passed_the_exam_struct_array",test_findLast_returns_the_last_student_who_has_passed_the_exam_struct_array,"test_findFirst_returns_the_first_student_who_has_passed_the_exam_struct_array",test_findFirst_returns_the_first_student_who_has_passed_the_exam_struct_array};
char testFileName[] = {"siddhuTest.c"};
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
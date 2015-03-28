#include <stdio.h>
int main()
{
	int array[]={1,2,3,4,5},i,*result[5];
	for(i=0;i<5;++i){
		result[i]=&array[i];
	};
	printf("Address of array[0] %p\n", &array[0]);
	printf("Value of result[0] %p\n", result[0]);
	printf("Value again addresss again %d %p\n", *result[0], &*result[0]);
	printf("Value again- %d\n", *result[1]);
	printf("Value again-- %d\n", *result[2]);
	printf("Value again--- %d\n", *result[3]);
	printf("Value again---- %d\n", *result[4]);
	return 0;
}
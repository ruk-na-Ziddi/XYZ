#include <stdio.h>

int is_Prime(int number){
	int j;
	for (j = 2; j < number/2; j++){
 		if((number % j) ==0) 
 			return 0;
 	};
	return 1;
};

int main()
{
	int start=2,end=100,i,*arr,count=0;
	for(i = start; i <= end; i++){
    	if(is_Prime(i)){
 			printf("%d\n", i);
 			arr[count]=i;
 			++count;
  		};
  	};
	return 0;
};
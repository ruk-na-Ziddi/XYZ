#include <stdio.h>
#include <string.h>

int main()
{
	int x=10;
	char c='a';
	char c_ptr[]={'a','b','c'};
	char *cc_ptr[]={"ask","apk","kpk","ppk","ult","gya"};
	printf("before------         %d\n", x);
	x=15;
	printf("after-------         %d\n", x);
	printf("\n");

	printf("before------         %c\n", c);
	c='b';
	printf("after-------         %c\n", c);
	printf("\n");

	printf("before------         %c\n", c_ptr[0]);
	c_ptr[0]='d';
	printf("after-------         %c\n", c_ptr[0]);
	printf("\n");

	printf("before------         %s\n", cc_ptr[0]);
	cc_ptr[0]="bow";
	printf("after-------         %s\n", cc_ptr[0]);
	printf("\n");
	return 0;
}
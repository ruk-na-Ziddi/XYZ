#include <stdio.h>

int main(int argc, char const *argv[])
{
	char *str = "hello";
	char *str1 = "hello";
	printf("%p %p %p %p",&str,&str1,str,str1);
	return 0;
}
#include <stdio.h>
#include <string.h>

int main(){
	char str = 'b';
	char c = 'H';
	char* d;
	d=(char)malloc(sizeof(char)*2);
	d[0]=str;
	printf("%s\n", d);
	return 0;
}
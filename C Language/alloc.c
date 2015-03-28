#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char * placeHolder=0;
	char * tempHolder;
	placeHolder=calloc(1, 100);
	placeHolder[0]='a';
	placeHolder[1]='b';
	placeHolder[2]='a';
	placeHolder[3]='b';
	placeHolder[4]='a';

	printf("%p  \n", placeHolder);
	tempHolder=realloc(placeHolder, 11);
	printf("%p  \n", tempHolder);
	tempHolder[0]='a';
	tempHolder[11]='b';
	tempHolder[12]='a';


	// free(tempHolder);
	free(tempHolder);
	return 0;
}
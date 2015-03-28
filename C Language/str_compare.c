#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int strcomp(char *char_1,char *char_2){
	int l1=strlen(char_1),l2=strlen(char_2),i;
	if(l1 != l2){
		if(l1 > l2){return 1;};
		if(l1 < l2){return -1;};
	};
	for (i = 0; i < l1; ++i)
	{
		if(char_1[i] != char_2[i]){
			if(char_1[i] > char_2[i]){return 1;};
			if(char_1[i] < char_2[i]){return -1;};
		}
	};
	return 0;
}

int main()
{
	char *char_1="hahaha";
	char *char_2="hahaha";
	strcomp(char_1,char_2);
	return 0;
}
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

// int add(int a,int b){
// 	return a+b;
// }

// int main(){
// 	char a='9',b='3';
// 	int x=a-'0',y=b-'0';
// 	int z=add(x,y);
// 	printf("result is ----------- %d\n", z);
// 	return 0;
// }

// int main(){
// 	int i,len;
// 	char *str1="qwerty";
// 	char *str2;
// 	str2=(char *)malloc(sizeof(char)*10);
// 	len=strlen(str1);
// 	for(i=0;i<len;++i){
// 		str2[i]=str1[i];
// 		printf("-----------------%c\n", str2[i]);
// 	}
// 	free(str2);
// 	return 0;
// }


char* intToStr(int num){ 
    int size = log10(num) + 1;
    char *str = malloc(size);
    sprintf(str, "%d", num);
    return str;
}

int main()
{
	char *str=intToStr(12345);
	printf("--------%s\n", str);
	free(str);
	return 0;
}
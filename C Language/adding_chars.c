#include <stdio.h>
#include <string.h>

void cat_char(char* str, char c){
    printf("111111111111------------------------------%d\n", strlen(str));
    str[strlen(str)] = c;
    printf("2222222222222-----------------------------%d\n", strlen(str));
    str[strlen(str)+1] = '\0';
    printf("3333333333333-----------------------------%d\n", strlen(str));
}

int main(void){
    char str[] = "";
    char c = 'o';
    cat_char(str, c);
    printf("%s\n", str);
    return 0;
}
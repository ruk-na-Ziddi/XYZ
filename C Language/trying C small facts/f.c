#include <stdio.h>
int main(){
    int i;
    float f=-10.3;
    char *p=(char *)&f;
    printf("---------------%f\n", f);
    for(i=0;i<4;i++){
        printf("%p    %d\n",&p[i],p[i]);
    }
    return 0;
}

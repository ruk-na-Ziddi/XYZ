#include<stdio.h> 

int func (int a, int b)
{
    printf("\n a = %d\n",a);
    printf("\n b = %d\n",b); 

    return 0;
} 

int main(void)
{
    int(*fptr)(int,int); 

    // fptr = func; 

    func(2,3);
    fptr(2,3); 

    return 0;
}
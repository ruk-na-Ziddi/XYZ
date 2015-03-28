#include <stdio.h>
 
int main()
{
   float amount,rate ,time,interest;
   printf("amount , rate , time in year to get interest\n");
   scanf("%f%f%f",&amount,&rate,&time);
   interest=(amount*rate*time)/100;
   printf("The interest is : = %.2f\n",interest);
   return 0;
}
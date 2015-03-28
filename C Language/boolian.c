#include <stdio.h>
#include <stdbool.h>

bool checkNumber(int num){
   if(num%2==0){return true;};
   return false;
}

int main(int argc, char const *argv[]){
	int x=6;
	bool y=checkNumber(x);
	printf("%s\n",y?"True":"False" );
	return 0;
}
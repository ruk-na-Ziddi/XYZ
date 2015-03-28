#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int is_prime(int number) {
	int i=3;
	float max=sqrt(number);
	for(;i<=max;i+=2) {
		if(number%i==0)
			return 0;
	}
	return 1;
}

int next_prime_candidate(int x) {
	int closest_tenth=x-(x%10);
	int zero[]={0,6,0,0,0,0,0,4,0,0};
	int one[]= {0,2,0,4,0,0,0,2,0,4};
	int two[]= {0,0,0,6,0,0,0,0,0,2};

	int offset_to_use=closest_tenth%3;
	switch(offset_to_use) {
		case 0:return zero[x%10]+x;
		case 1:return one[x%10]+x;
		case 2:return two[x%10]+x;
	}
}

int range_of(int start, int end, int **result) {
	int i;
	int total=0;
	if(start%2==0 && is_prime(start)) {
		start++;
		total++;
	}
	start=next_prime_candidate(start);
	while(start<end) {
		start=next_prime_candidate(start);
		if(is_prime(start))
			total++;
	}
	return total;
}

int main(int argc, char const *argv[])
{
	int start,end;

	sscanf(argv[1],"%d",&start);
	sscanf(argv[2],"%d",&end);
	printf("%d\n", range_of(start, end, NULL));
	// if(is_prime(number))
	// 	printf("%d is prime\n", number);
	// else 
	// 	printf("%d is not prime\n", number);
	return 0;
}
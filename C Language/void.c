#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char *c,*d;
	void *cv,*dv;

	c="abc";
	d="bcd";

	cv=(void *)c[0];
	dv=(void *)d[0];

	printf("value of c =%s\n", c);
	printf("value of d =%s\n", d);

	printf("------------------\n");

	printf("address of c =%p\n", c);
	printf("address of d =%p\n", d);

	printf("-----------------\n");

	printf("value of cv =%p\n", cv);
	printf("value of dv =%p\n", dv);

	printf("------------------\n");

	printf("value of char cv =%c\n", (char )cv);
	printf("value of char dv =%c\n", (char )dv);

	return 0;
}
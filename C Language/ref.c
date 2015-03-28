typedef struct st student;
struct st
{
	int no;
	int no2;
};
int main(void){
	student a={3,7};
	printf("%p\n",a);
	printf("%p\n",&a.no2);

	return 0;
}
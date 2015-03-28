#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct student Student;

struct student{
	int id;
	int score;
	char *name;
	Student *next;
};

typedef struct student_list{
	Student *head;
	Student *tail;
	int counter;
}StudentList;

void print_student(Student *s){
	printf("%d %d %s\n",(*s).id,(*s).score,(*s).name);
}

void create_student(void *s){
}

int main(){
	Student anku={1,37,"ankur",NULL};
	Student rade={2,30,"radhe",NULL};
	anku.next=&rade;
	print_student(&anku);
	print_student(anku.next);
	return 0;
}
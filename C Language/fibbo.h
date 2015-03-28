int fibbo(int numberOfTerms,int *array);
int concat(int *array1, int len_of_array1, int *array2, int len_of_array2, int **result_array);
int filter(int *array, int length, int threshold, int **result_array);
int reverse(int *array, int length, int **result_array);
int reverse_1(int *array, int length);
int slice(int *array,int len_of_array,int start_index,int end_index,int **result_array);
int prime(int num1,int num2,int **array);
int strcomp(char *char_1,char *char_2);
int forEach_int(int *array,int length,void (*fn)(int,int,int *));
int forEach_float(float *array,int length,void (*fn)(float,int,float *));
int forEach_char(char *array,int length,void (*fn)(char,int,char *));
int filter_int(int *array,int length,int **result_array,int (*fn)(int,int,int *));
int filter_float(float *array,int length,float **result_array,int (*fn)(float));
int filter_char(char *array,int length,char **result_array,int (*fn)(char,int,char *));
int forEach_string(char **array,int length,void (*fn)(char *,int,char **));
int *map_int(int *array,int lenght,int (*fn)(int,int,int *));
float *map_float(float *array,int lenght,float (*fn)(float));
char *map_char(char *array,int length,char (*fn)(char,int));
char **map_string(char **array,int length,char *(*fn)(char *,int));
int filter_string(char **array,int length,char **result_array,int (*fn)(char *));
int reduce_int(int *array,int length,int initial_value,int (*fn)(int,int));
float reduce_float(float *array,int length,float initial_value,float (*fn)(float,float));
char reduce_char(char *array,int length,char initial_value,char (*fn)(char,char));
char *reduce_string(char **array,int length,char *initial_value,char *(*fn)(char *,char *));
int indexOf(char *str,char *substr);
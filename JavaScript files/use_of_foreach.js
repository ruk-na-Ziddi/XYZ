var array1=[1,2,3,4,5];
var array2=[1,2,3,4,5];
array3=[];
var sum_of_array=function(data,index){
	return array3[index]=array1[index]+array2[index];
	//return console.log(data,index);
};
array1.forEach(sum_of_array);
console.log(array3);
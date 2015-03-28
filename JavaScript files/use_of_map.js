arr1=[1,2,3,4];
arr2=[4,3,2,1];
var sum = function(arrElement,arrIndex){
	return arr1[arrIndex]+arr2[arrIndex];
};
arr3=arr1.map(sum);
console.log(arr3);
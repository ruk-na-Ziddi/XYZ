var sampleArray1 = [1,3,22,3,34,2,56] ;
var less_than_ten = function(element){
	return element<10;
};
var sampleArray2 = sampleArray1.filter(less_than_ten);
console.log(sampleArray1,sampleArray2);
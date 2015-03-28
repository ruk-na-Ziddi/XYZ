var anArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var anotherArray=[1,21,1,22,2,1,2,4];
var greaterThanFive = function(element){
	return element>5;
};

var lessThanFive = function(element){
	return element<5;
};

var privateFilter =function (array,referFunction){
	var result=[];
	array.forEach(function(x){
		if (referFunction(x))
		 result.push(x)
	});
	return result;
};

var newArray=privateFilter(anArray,greaterThanFive);
console.log(newArray);

var anotherNewArray=privateFilter(anArray,lessThanFive);
console.log(anotherNewArray);

var nowArray=privateFilter(anotherArray,lessThanFive);
console.log(nowArray);
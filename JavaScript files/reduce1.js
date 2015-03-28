numbers=[1,2,3,4,5,6,7,8,9];
var addArrayElement=function(x,y){
	return x+y;
};
var greatestElement=function(x,y){
	return (x>y)?x:y;
};
var newNumbers=numbers.reduce(addArrayElement);
console.log(newNumbers);
var greatestNumber=numbers.reduce(greatestElement);
console.log(greatestNumber);

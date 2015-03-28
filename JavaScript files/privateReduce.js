var anArrar=[0,1,2,3,4,5,6,7,8,9];
var names=['my','name','is','humanity'];
var addAll=function(x,y){
	return x+y;
};
var greatest=function(x,y){
	return (x.length>y.length)?x:y;
};
var privateReduce=function(array,funref){
	var retValue=array[0];
	array.slice(1).forEach(function(x){
		return retValue=funref(retValue,x);
	});
	return retValue;
};
var result=privateReduce(anArrar,addAll);
console.log(result);
var nextResult=privateReduce(names,greatest);
console.log(nextResult);
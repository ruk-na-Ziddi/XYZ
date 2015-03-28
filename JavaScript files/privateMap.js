svar thisArray = [1,2,3,4,5,6,7,8];

var incrementOne = function(element){
	return element+1;
};

var mulFive = function(num){
	return num*5;
};

var privateMap = function(array,referfunction){
	var result=[];
	array.forEach(function(x){
		var y=referfunction(x);
		result.push(y);
	});
	return result;
};

var newArray = privateMap(thisArray,incrementOne);
console.log(newArray);

var nowNewArray = privateMap(thisArray,mulFive);
console.log(nowNewArray);
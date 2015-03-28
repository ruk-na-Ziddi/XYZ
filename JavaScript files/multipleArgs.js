var sum = function(){
	var result=0;
	for(var i=0;i<arguments.length;i++)
		result+= arguments[i];
	return result;
};
var something = function(a,b){
	console.log(a,b);	
};
console.log(sum(2,6,"a","b",3,4,5,"th"));

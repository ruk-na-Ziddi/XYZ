var argues=process.argv.slice(2);

var addArrayElements=function(array){
	return array.reduce(function(ele1,ele2){
		return parseInt(ele1)+parseInt(ele2) || 'please enter numbers only'
	});
};

var add=function(){
	// var numbers=[];
	// Array.prototype.forEach.call(argues,function(arg){numbers.push(parseInt(arg))});
	// console.log(argues, toString.call(argues));
	return addArrayElements(argues);
}

console.log(add());
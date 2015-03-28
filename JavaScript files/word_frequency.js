var string="hello world hello how are you and your family";

var word_count=function(str){
	var arr=str.split(" ");
	var obj={};
	arr.forEach(function(x){
		console.log("obj",obj)
		obj[x]=obj[x]||0;
		obj[x]+=1;
	});
	return obj;
};
console.log(word_count(string));
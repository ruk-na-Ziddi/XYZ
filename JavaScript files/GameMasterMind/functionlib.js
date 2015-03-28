var module = {};
exports.module = module;

module.generateDigit = function(){
	return 1;
};

module.generateNumber = function(){
	return "18765";
};

var code_arr=[];
var user_arr=[];
module.confirmNumber = function(code,userInput){
	var arr=[];
	var user=userInput.toString().split("");
	code.toString().split("").forEach(function(digit,index){
		if(digit==userInput.toString()[index]){
			arr.push(digit);
		}
		else{
				code_arr.push(digit);
				user_arr.push(user[index]);
		}
	});
	return arr.length;
};
module.presentNumber = function(code,userInput){
	code_arr=[];
	user_arr=[];
	module.confirmNumber(code,userInput);
	var counter = 0;
	code_arr.forEach(function(digit,index){
		if((user_arr.indexOf(digit)>=0) ){
			var i=user_arr.indexOf(digit);
			user_arr[i]=0;
			++counter;
		}
	});
	return counter;
};

module.checkSpecial = function(string){
	var result = false;
	string.toString().split('').forEach(function(char){
	([".","+","-","*","/","@","!","#","$","%","^","&","(",")","{","}","[","]","=",">","<","?"].indexOf(char)>=0) && (result = true);
	});
	return result;
};

module.rangeValidator = function(string){
	var result = false;
	string.toString().split('').forEach(function(char){
		if(char<1 || char>8)
			result=true;
	});
	return result;
};

module.alphavalidator = function(string){
	var result = false;
	string.toString().split('').forEach(function(char){
		if(char*0!=0)
			result=true;
	});
	return result;
};

module.validateLength = function(string){
	var result = false;
	if(string.toString().length != 5)
		result = true;
	return result;
};
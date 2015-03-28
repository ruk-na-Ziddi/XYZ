var m = require("./functionlib.js").module;
var struct = {};
exports.struct = struct;

struct.count = 0;
struct.userInputs = [];
struct.prevStatus = [];
struct.code = m.generateNumber();
struct.attempt = function(){
	return ++struct.count;
};
struct.validation = function(userInput){
	var result = false;
	if(m.checkSpecial(userInput) || m.rangeValidator(userInput) || m.alphavalidator(userInput) || m.validateLength(userInput))
		result = true;
	return result;
};

struct.checkNumber = function(userInput){
	var confirm = m.confirmNumber(struct.code,userInput);
	var present = m.presentNumber(struct.code,userInput);
	struct.userInputs.push(userInput);
	var result = "["+confirm+" , "+present+"]";
	struct.prevStatus.push(result);
};

struct.timer = function(start_time,end_time){
	var total_sec = Math.floor((end_time - start_time)/1000);
	var min = Math.floor(total_sec/60);
		sec = total_sec % 60;
	return ""+min+" : "+sec;
};
var assert=require('assert');
var test={};
var give_my_answer=function(array,str){
	var result="";
	if(array.length==0||typeof(array[0])=='number'/*||array==undefined*/){
		return result=result+str;
	};
	if(array==undefined&&str==undefined){
		return result=result+"john_smith";
	};
	return result=result+array.reduce(function(x,y){
		return (x.length>y.length)?x:y;
		});

};
test.give_largest_string=function(){
	var names=["jaya","costa","sayali"]
	assert.equal(give_my_answer(names),"sayali")
};
test.give_prashant=function(){
	var names=[];
	assert.equal(give_my_answer(names,"prashant"),"prashant")
};
test.give_john_smith1=function(){
	var names=[];
	assert.equal(give_my_answer(names,"john_smith"),"john_smith")
};
test.give_john_smith2=function(){
	var names=[1,2,3];
	assert.equal(give_my_answer(names,"john_smith"),"john_smith")
};
test.give_john_smith3=function(){
	var names="";
	assert.equal(give_my_answer(names,"john_smith"),"john_smith")
};
test.give_john_smith4=function(){
	assert.equal(give_my_answer(),"john smith")
};
exports.test=test;
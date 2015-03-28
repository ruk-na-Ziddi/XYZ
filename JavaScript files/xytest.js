var m=require("./xymodule.js");
var assert=require('assert');
var test={};
exports.test=test;

test['there are two sample questions']=function(){
	assert.deepEqual(m.questions,[{q:'1+1',a:'2'},{q:'4/2',a:'2'}]);
};

test['the answer to 1+1 is not 3']=function(){
	assert.deepEqual(false,m.checkAnswer(0,'3'));
};
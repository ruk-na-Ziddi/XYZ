var quiz=require('./quiz.js').createQuiz;
var assert=require('assert');
var test={};
exports.test=test;

test['dhsghgsg']=function(){
	var q=createQuiz();
	q.answer(0,'2');
	q.answer(1,'2');
	assert.equal(q.status,'2/2')
}

test['vfghwedvhwgdshdgfsdgf']=function(){
	var q=createQuiz();
	q.answer(0,'2');
	q.answer(1,'5');
	assert.equal(q.status,'1/2')	
}
var fixedTime;
var getTimeStub=function(){
	return fixedTime;
}

test['time']=function(){
	var start=new Date();
	var end=new Date(start.getTime()*10000);
	fixedTime=start;
	var q=createQuiz(getTimeStub);
	q.answer(0,'2');
	fixedTime=end;
	q.answer(1,'5');
	assert.equal(q.totalTimeTaken,10);
};
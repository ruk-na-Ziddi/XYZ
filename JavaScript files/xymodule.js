var questions=require('./questions.js').questions;
var m = {};
exports.m=m;

m.questions = questions;

m.checkAnswer=function(questionIndex,givenAnswer){
	return questions[questionIndex].a==givenAnswer;
}
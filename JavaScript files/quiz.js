var questions=require('./question.js').q;
var readline=require('readline');

var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

var total=questions.length;
var counter=0;

var d=new Date();
var start_time=d.getTime();

var question_q=function(index){
	rl.question("Question: "+questions[index].que+"???",function(answer){
		console.log("Answer:",answer)
		if(questions[index].ans.toLowerCase().trim()==answer.toLowerCase().trim()){
			++counter;
		};
		
		if(index<total-1){
			++index;
			question_q(index);
			return;
		};
		var d1=new Date();
		var end_time=d1.getTime();
		var total_seconds = ((end_time - start_time)/1000);
		var hours = Math.floor(total_seconds/3600);
		var minutes=Math.floor((total_seconds-(hours*3600))/60);
		var seconds=Math.floor(total_seconds - (hours*3600) - (minutes*60));
		var taken_time = "hours"+hours+","+"minutes:"+minutes+","+"seconds:"+seconds;
		console.log("total taken time==>"+taken_time);

		console.log("your status==>"+counter+"/"+total);
		rl.close();
	});
};
question_q(0);
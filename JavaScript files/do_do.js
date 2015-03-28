var readline=require('readline');
var r1=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
// var sum=function(num1,num2){
// 	return (num1+num2);
// };
r1.question("can u add two numbers???",function(answer){
	console.log("your answer is",answer);
	r1.close();
});
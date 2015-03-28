var sumOfNumbers=function(){
	return ("the sum of numbers is:"+ this.num1+this.num2)
};
var numbers=function(num1,num2){
	this.num1=num1;
	this.num2=num2;
	this.sumOfNumbers=sumOfNumbers;
};
var numbersF=new numbers(2,3);
var sumOfNumbersF=numbersF.sumOfNumbers();
console.log(sumOfNumbersF);
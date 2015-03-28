var AnArray=function(array){
	this.array=array;
};

AnArray.prototype = {
	sumOfArrayElements:function(){
		return ("the array is:"+this.array+"  "+ "sum of all elements is:"+ this.array.reduce(function(x,y){
			return x+y;
		}));
	}
}

var numbers=[1,2,3,4,5,6,7,8];
//var digits=[2,2,41,3,4,5,6];
var array1=new AnArray(numbers);
var sumOfArray1Elements=array1.sumOfArrayElements();
console.log(sumOfArray1Elements);
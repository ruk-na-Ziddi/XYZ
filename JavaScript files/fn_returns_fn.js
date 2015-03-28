//how a function returns  function
//var array1=[1,2,3,4,5,6,7,8,9]
// var even = function(x){
// 	return x%2==0;
// };
// var odd = function(x){
// 	return !even
// }
var even=function(x){
	var f2=function(x){
		return x%2!=0
	};
	return !f2;
};
console.log(even(3))
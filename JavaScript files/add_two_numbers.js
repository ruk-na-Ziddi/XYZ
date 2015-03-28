var a = +process.argv[2];
var b = +process.argv[3];
var sum = function (a,b) {
	sum = +a + +b;
	return(sum);
};
console.log(sum(a,b));
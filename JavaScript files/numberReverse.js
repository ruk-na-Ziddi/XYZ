var num = +process.argv[2];
var result=0;
while(num > 0){
	var digit = num %10;
	num = (num-digit)/10;
	result = result*10+digit;
}
console.log(result);
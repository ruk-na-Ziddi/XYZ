var number = +process.argv[2];
var sum_digits = function(num) {
	var sum = 0;
	var remainder;
	while(num>0){
		remainder = num % 10;
		sum = sum + remainder;
		num = (num-remainder)/10;
	};
	return (sum);
};
console.log(sum_digits(number));
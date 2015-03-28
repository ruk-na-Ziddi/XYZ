var number = +process.argv[2];
var reverse = function (num){
	var result = 0;
	var remainder;
	while (num>10){
		var remainder = num % 10;
	    var result = result*10+remainder;
	    var num = (num-remainder)/10;
	};
	return (result);
};
console.log(reverse(number));
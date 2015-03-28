var num = +process.argv[2];
var reverse = function(n){
	console.log('start reverse(n:',n,')');
	if(n<10) return n;
	console.log('more than 1 digit');
	var digit = n %10;
	console.log('digit:',digit);
	var rest = (n - digit)/10;
	console.log('rest:',rest);
	var tser = reverse(rest);
	console.log('tser:',tser);
	var digits = Math.floor(Math.log(n)/Math.log(10));
	console.log('digits:',digits);
	return digit*Math.pow(10,digits)+tser;		
};
console.log(reverse(num));
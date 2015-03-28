var r = {};
r.while=function(count) {
	if (count()) {
		return {do:function(increment){
			increment();
			r.while(count).do(increment)}};
		};
		return {do:new Function()};
};
var ram=function(value){
	var devider=1;
	var counter=0;
	var condition=function(){return devider<=(value/2);};
	var action=function(){
		if(value%devider==0)
			++counter;
			++devider;
	};
	r.while(condition).do(action);
	return counter;
};
console.log(ram(50));
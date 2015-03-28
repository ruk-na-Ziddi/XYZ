var cat = function(){
	console.log("I am Tom");
	return "I will kill Jerry";
};
console.log("cat");
console.log(cat());

var rat = function(){
	console.log("I am  Jerry");
	return "I am clever than Tom"
};
console.log("rat");
console.log(rat());

var just_a_fight = function(){
	return cat();
};
console.log("just_a_fight");
console.log(just_a_fight());

var clever = function(x){
	x();
	return "Jerry is clever than Tom";
};
console.log(clever(rat));
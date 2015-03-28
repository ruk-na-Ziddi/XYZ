var makeQuery=function(){
	var argues=[];
	Array.prototype.forEach.call(arguments,function(arg){
		argues.push(arg);
	});
	return argues.join(',');
};

var que=makeQuery('Dolly','Suparna','Ankur','Vikas');
console.log(que);

var select=function(){
	return "select";
};

var from=function(arg){
	return arg+" from ";
};

var where=function(arg){
	return 'where id='+arg.id;
};
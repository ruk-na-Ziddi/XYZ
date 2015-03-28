var anArray=[[1,2],[3,4]];
//var array=[];
var newArray=anArray.reduce(function(x,y){
	var z= x.concat(y);
	return z;
});
console.log(newArray);
//var myarray=newArray(anArray);
//console.log(myarray);


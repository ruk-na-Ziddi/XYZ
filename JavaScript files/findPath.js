var places={
	"blr":["chn","hyd","mum"],
	"mum":["blr","chn","hyd","kol","nd"],
	"hyd":["kol","blr","mum"],
	"nd":["mum","kol"],
	"chn":["kol","blr","mum"],
	"kol":["nd","mum","hyd","chn"]
};

var sortedPlaces=["mum","kol","blr","chn","hyd","nd"];

var path="";

// var foundINArray=function(array,dest){
// 	if(array.indexOf(dest)>=0)
// }

// var findPath=function(source,dest){
// 	if(!places[source] || !places[dest]){
// 		console.log("wrong source or dest");
// 		return;
// 	}
// 	path=source;
// 	if(places[source].indexOf(dest)>=0){
// 		path=path+"->"+places[source][places[source].indexOf(dest)];
// 		console.log(path);
// 		return;
// 	}
// 	places[source].forEach(function(ele,index,array){
// 		if(places[ele].indexOf(dest)>=0){
// 			console.log(ele);
// 			path=path+"->"+ele+"->"+dest;
// 			console.log(path);
// 			path=source;
// 			return;
// 		}
// 		// path=path+"->"+ele;
// 		// funct()
// 	})
// }

var isDirectLink = function(source, dest) {
	return(places[source].indexOf(dest)>=0) ? true : false;
}
var pathBetween = function(source, dest) {
	path = source;
	if(isDirectLink(source, dest)) {
		return path+"->"+dest;
	}
	places[source].forEach(function(place){
		console.log("-----------------"+" "+place);
		console.log("-----------------"+" "+path+"->"+pathBetween(place, dest));
		path= path + pathBetween(place, dest);
	});
	return path;
}

console.log(pathBetween("blr", "kol"));
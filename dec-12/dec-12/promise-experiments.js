var Promise = require("bluebird");
var fs = require('fs');
Promise.promisifyAll(fs);

var errorHandler = function(err){
	console.log('problem ... ',err);
};
// var p = fs.readFileAsync('a.json','utf-8').then(function(text){
// 	var object = JSON.parse(text);
// 	console.log(object);	
// },errorHandler).then(function(){console.log('ab kya')}).then(function(){console.log('hogaya')});


var readJSONAsync = function(fileName){
	return fs.readFileAsync(fileName,'utf-8').then(JSON.parse,errorHandler);
};

readJSONAsync('a.json').then(console.log);

var afterSeconds = function(seconds){	
	var f = function(fulfill,reject){
		setTimeout(function(){
			fulfill('there')			
		},seconds*1000);
	};
	return new Promise(f);
};

var greet = function(x){ console.log('hi',x)};
afterSeconds(2).then(null,errorHandler);
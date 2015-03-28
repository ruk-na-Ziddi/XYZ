var fs=require('fs');
console.log(" ");
var content=fs.readFileSync('file.txt','utf-8');
console.log("content",content,"--------------------",toString.call(content));
console.log(" ");
var realContent=JSON.parse(content);
console.log("realContent",realContent,"---------------",toString.call(realContent));
var incrementedContent=realContent.map(function(ele){
	if(ele.q && ele.a){
		return "right element";
	};
	return "wrong element";
});
console.log(" ");
console.log("incrementedContent",incrementedContent,"--------------",toString.call(incrementedContent));
var _ = require('lodash');
var page = require('webpage').create();
var url = 'https://news.google.co.in/';
var toLI = function(text){
	//return '<li>'+text+'</li>';
	return _.template('<li><%=text%></li>\n',{text:text});
};

page.open(url, function (status) {
  var content = page.evaluate(function(){
  	var result = [];
  	var elements  = document.getElementsByClassName('titletext')
  	for(var i=0;i<elements.length;i++) 
  		result.push(elements[i].textContent);
  	return result;
  });  
  console.log('<ol>'+content.map(toLI).join('')+'</ol>');
  phantom.exit();
});
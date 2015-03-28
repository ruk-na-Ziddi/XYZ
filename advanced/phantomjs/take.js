var page = require('webpage').create();
var url = 'http://en.wikipedia.org/wiki/Project_Initiation_Documentation';
page.open(url, function (status){
	page.render('project_doc.png');
	phantom.exit();
});
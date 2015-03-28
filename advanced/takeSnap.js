var page = require('webpage').create();
var url = 'https://jamielinux.com/articles/2013/08/create-and-sign-ssl-certificates-certificate-authority/';
page.open(url, function (status){
	page.render('openSsl.png');
	phantom.exit();
});
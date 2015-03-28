console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://www.youtube.com/watch?v=8FXJP-ezaAg';
page.open(url, function (status) {
  page.render('youtube.png');
  phantom.exit();
});
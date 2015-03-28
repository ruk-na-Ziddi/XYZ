var express = require('express');
var router = express.Router();
var debug = require('debug')('myapp');

/* GET home page. */
router.get('/', function(req, res) {
	debugger;
  res.render('index', { title: 'Express' });
});

module.exports = router;

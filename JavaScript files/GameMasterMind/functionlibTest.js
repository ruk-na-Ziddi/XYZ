var assert = require("assert");
var m = require("./functionlib.js").module;
var test = {};
exports.test = test;

test["generateDigit generates number between 1 to 8"] = function(){
	assert.ok(m.generateDigit()<9);
	assert.ok(!(m.generateDigit()<1));
	assert.ok(m.generateDigit()>=1);
};

test["generateNumber generates number of length 5"] = function(){
	assert.ok(m.generateNumber().length==5);
	assert.ok(!(m.generateNumber().length<5));
	assert.ok(!(m.generateNumber().length>5));
};

test["confirmNumber returns number of digits at the right place in user input"] = function(){
	assert.equal(2,m.confirmNumber(12867,12345));
	assert.equal(0,m.confirmNumber(12867,54354));
	assert.equal(5,m.confirmNumber(12867,12867));
};


test["presentNumber returns number of digits present in user input but not on right place"] = function(){
	assert.equal(0,m.presentNumber(12867,12345));
	assert.equal(0,m.presentNumber(12867,54354));
	assert.equal(1,m.presentNumber(64444,41344));
	assert.equal(1,m.presentNumber(41344,64444));
	assert.equal(2,m.presentNumber(12867,76861));
	assert.equal(2,m.presentNumber(76861,12867));
	assert.equal(0,m.presentNumber(55555,55555));
	assert.equal(5,m.presentNumber(12345,54231));
	assert.equal(5,m.presentNumber(12332,33221));
	assert.equal(0,m.presentNumber(13585,13385));
	assert.equal(0,m.presentNumber(13385,13585));
	assert.equal(0,m.presentNumber(12232,33333));
	assert.equal(0,m.presentNumber(33333,12232));
};

test ["check for special characters"] = function(){
	assert.ok(m.checkSpecial("12.47"));
	assert.ok(m.checkSpecial("-1247"));
	assert.ok(m.checkSpecial("1234@"));
	assert.ok(m.checkSpecial("1%$^@"));
	assert.ok(!(m.checkSpecial("12345")));
	assert.ok(m.checkSpecial("(1+2*4)"));
	assert.ok(!(m.checkSpecial(""+123+12)));
};

test["user input should be less than 9 and greater than 0"] = function(){
	assert.ok(m.rangeValidator("12398"));
	assert.ok(!(m.rangeValidator("12328")));
	assert.ok(m.rangeValidator("02328"));
};

test["user input should not be a alphabet characters "] = function(){
	assert.ok(m.alphavalidator("12a98"));
	assert.ok(!(m.alphavalidator("12328")));
	assert.ok(m.alphavalidator("02z28"));
	assert.ok(m.alphavalidator("12.47"));
	assert.ok(m.alphavalidator("-1247"));
};

test["number length should be 5"] = function(){
	assert.ok(m.validateLength("123456"));
	assert.ok(!(m.validateLength("12345")));
	assert.ok(m.validateLength(12345600));
	assert.ok(m.validateLength(1));
};
var struct = require("./structure.js").struct;
var readline = require('readline');
var colors = require("colors");

var read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var prompt = '\x1B[32m'+"Enter Guess>"+'\x1B[33m';
read.setPrompt(prompt,12);
var startTime = new Date();

var startGame = function(){
	console.log("\n\t\t***".cyan+" Break 5 digit code made with digits 1 to 8 within 12 attempts (eg:12345) ".red+"***\n\n".cyan);
	read.prompt();
};
var winGame = function(){
	console.log("____________________________________________________________".rainbow);
	console.log("\t\t\tYou win...".magenta);
	var endTime = new Date();
	console.log("\t\t\t"+struct.timer(startTime,endTime))
	read.close();
	process.exit(0);
};
var lossGame = function(){
	console.log("____________________________________________________________".rainbow);
	console.log("\t\t\tYou loss!!!".magenta);
	var endTime = new Date();
	console.log("\t\t\t"+colors.cyan(struct.timer(startTime,endTime)));
	read.close();
	process.exit(0);
};
var showStatus = function(){
	console.log(colors.greyBG("\t\tGuess\t\t[C , P]\t\tAttempt\t\t\t".black));
	console.log(colors.greyBG("\t\t-----\t\t-------\t\t-------\t\t\t".black));
	var attempt = 0;
	struct.userInputs.forEach(function(guess,index){
		console.log(colors.blueBG("\t\t"+guess+"\t\t"+struct.prevStatus[index]+"\t\t  "+(++attempt)+"    \t\t\t"));
	});
};

var checkInput = function(userInput){
	if(struct.count < 12){
		(userInput == struct.code) && winGame();
		if(struct.validation(userInput))
			console.log("\t\t\tInvalid Input!!\t\t\t\t\t".redBG);
		else{
			struct.attempt();
			struct.checkNumber(userInput);
			showStatus();
		}
		read.prompt();
	}
	else
	{
		lossGame();
	}
};

read.on('line',checkInput);
startGame();
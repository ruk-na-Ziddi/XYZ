var maximum=49;
var minimum=0;
function getRandomArbitrary() {
 	var num=Math.ceil(Math.random() * (maximum - minimum) + minimum);
 	console.log('num--------->',num);
 	return num; 
}
var RNumber=getRandomArbitrary();
console.log('=======>',RNumber);
var RTries;
function Init(){
	console.log("RNumber---------->",RNumber);
	RTries = 0;
	document.FGame.Output.value='I am thinking of a number between '+minimum+' and ' + maximum +' Guess it....';
	document.FGame.Tries.value=RTries;
	document.FGame.HighLow.value='';
	document.FGame.Input.value='';
}
console.log(Init());
function Game(Number) {
	if(Number==RNumber) {
	RTries++;
	document.FGame.Output.value='You guessed it in ' + RTries + ' tries! It was ' + RNumber + '! Hit Restart to play again.';
	document.FGame.HighLow.value='Got It!';
	document.location.reload();
	}
	else {
	RTries++;
	document.FGame.Output.value='Hey Idiot The Number should be less than 49';
	document.FGame.HighLow.value=(RNumber > Number) ? 'Higher!' : 'Lower!';
	document.FGame.Tries.value=RTries;
   }
}
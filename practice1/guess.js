var min=0;
var max=1000;
var attempts=8;

var valueOfButton=function(id){
	var input= document.getElementById('itsInput');
	input.value=input.value+id;
}


var getRandomInt=function(){
  var num=Math.floor(Math.random()*(max-min))+min;
  return num;
}

var generatedNum=getRandomInt();

var reload=function(){
	document.getElementById('itsInput').value='';
	document.getElementById('message').value='';
	document.getElementById('instruction').value='';
	document.getElementById('attempt').value=9;
	location.reload();
};

var smaller=function(){
	var input=document.getElementById('itsInput');
	var message=document.getElementById('message');
	if(input.value<generatedNum){
		--attempts;
		message.value=input.value+' is smaller than Expected Number';
		input.value='';
		return true;
	};
};

var bigger=function(){
	var input=document.getElementById('itsInput');
	var message=document.getElementById('message');
	if(input.value>generatedNum  && input.value<=max){
		--attempts;
		message.value=input.value+' is bigger than Expected Number';
		input.value='';
		return true;
	};
};

var gotIt=function(){
	var input=document.getElementById('itsInput');
	var message=document.getElementById('message');
	if(input.value==generatedNum){
		message.value='Got IT';
		alert('Hey....... You did it.It was '+generatedNum);
		reload();
	};
};

var moreThanMax=function(){
	var input=document.getElementById('itsInput');
	var message=document.getElementById('message');
	if(input.value>max){
		--attempts;
		message.value="Click on 'GetInstrunction' Please!!!!";
		input.value='';
		return true;
	};
};

var noInput=function(){
	var input=document.getElementById('itsInput');
	var message=document.getElementById('message');
	if(input.value==''){
		--attempts;
		message.value='Please give a number as Input';
		return true;
	};
};

var maxAttemptsDone=function(){
	if(attempts==0 && !gotIt()){
		alert("Unfortunately You couldn't win, Number is==>"+generatedNum)
		reload();
	};
};

var getInstrunction=function(){
	var instruct=document.getElementById('instruction');
	instruct.value='Type a number between '+min+' and '+max;
};


var lockIt=function(){
	var attempt=document.getElementById('attempt');
	attempt.value=attempts;
	maxAttemptsDone() || noInput() || moreThanMax() || smaller() || bigger() || gotIt()
};
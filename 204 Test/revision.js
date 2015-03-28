var r = {};
exports.r = r;
r.reverseText=function(text) {
	return text.split('').reverse().join('');
};
r.createRectangle=function(point1,point2){
	Object.defineProperties(this,{
		length:{value:point2[0]},
		width:{value:point2[1]},
		area:{value:point2[0]*point2[1]},
		perimeter:{value:2*(point2[0]+point2[1])},
		moveTo:{value:function(newArr){
			return new r.createRectangle(newArr,point2);
	 	},writable:true},
	 	hasPoint:{value:function(point){
	 		return (point[0]<=point2[0]&&point[0]>=point1[0])&&
	 		(point[1]<=point2[1]&&point[1]>=point1[1]);
	 	},configurable:true}
	});
	return this;
};
r.createCircle=function(arr,radius){
	Object.defineProperties(this,{
		radius:{value:radius-arr[0]||arr[1]},
		area:{value:(22*radius*radius)/7},
		perimeter:{value:(2*22*radius)/7}
	});
};
r.welcome=function(str,value){
	if (typeof(str)=='string'&&value==undefined){
		return "hello text";
	}
	else if(typeof(str)=='undefined'){
		return 'who is it';
	}
	else if (typeof(str)=='boolean') {
		return 'to be or not to be';
	}
	else if(typeof(str)=='function'){
		return "call that";
	}
	else if(toString.call(str)=='[object Array]'){
		var my_str='seeya ';
		if (str==undefined){
			return 'seeya';
		}
		else{
			str.forEach(function(x){my_str = my_str+x+'_'});
			return my_str.slice(0,my_str.length-1);
		}
	}
	else if (toString.call(str)=='[object Number]') {
		if(isNaN(str))
			return 'hey dont count';
		else if(str == Infinity)
			return 'get out of the world';
		else if(Math.floor(str) != str)
			return 'hey decimal';
		else
			return 'hey count';
	}
	else if (toString.call(str)=='[object Null]') {
		return 'oh no';
	}
	else if(typeof(str)=='string' && value!=undefined){
		var arr=[];
		var condition=function(){return value!=0;};
		var action=function(){
			arr.push(str+"-");
			--value;
		};
		r.while(condition).do(action);
		var str1= arr.toString().split(",").join("");
		return str1.substr(0,str1.length-1);
	}
	else if(toString.call(str)=='[object Object]'){
		var my_str='hi ';
		if(str==undefined){
			return 'hi';
		}
		else
		{
			var keys=Object.keys(str);
			keys.forEach(function(x){
				my_str=my_str+x+","
			});
			return my_str.substr(0,my_str.length-1);
		}
	};
};
r.Line=function(point1,point2){
	Object.defineProperties(this,{
		start:{value:point1,enumerable:true},
		end:{value:point2,enumerable:true},
		findY:{value:function(value){
		if (value< point1.x || value>point2.x )
	 		return null;
	 	var m=(this.end.y-this.start.y)/(this.end.x-this.start.x);
	 	return (m*(value-this.start.x)+this.start.y)
	 }},
	 toString:{value:function(){
	 	return '[Line from '+this.start.x+','+this.start.y+' to '+this.end.x+','+this.end.y+']';
	 }},
	 findX:{value:function(value){
	  if (value< point1.y || value>point2.y) 
	 		return null;
	 	var m=(this.end.y-this.start.y)/(this.end.x-this.start.x);
	 	return (((value-this.start.y)/m)+this.start.x);
	 }},
	 hasPoint:{value:function(point){
	 	return point.y==this.findY(point.x);
	 }},
	 length:{value:Math.sqrt(Math.pow((point2.x-point1.x),2)+Math.pow((point2.y-point1.y),2))},
	 isParallelTo:{value:function(args){
	 	if (this.hasPoint(args.start)||this.hasPoint(args.end)||args.hasPoint(this.start)||args.hasPoint(this.end)){
			return false;	 		
	 	} else{
	 	var m1=(this.end.y-this.start.y)/(this.end.x-this.start.x);
	 	var m2=(args.end.y-args.start.y)/(args.end.x-args.start.x);
	 	return (m1==m2);
	 };
	 }},
	 findPointFromStart:{value:function(distance){
	 	var m=(this.end.y-this.start.y)/(this.end.x-this.start.x);
	 	var x2=(this.start.x+distance)/Math.sqrt(1+Math.pow(m,2));
	 	var y2=m*x2;
	 	return {x:x2,y:y2};
	 }},
	 findPointFromEnd:{value:function(distance){
	 	var m=(this.end.y-this.start.y)/(this.end.x-this.start.x);
	 	var x2=this.end.x-(distance/Math.sqrt(1+Math.pow(m,2)));
	 	var y2=m*x2;
	 	return {x:x2,y:y2};
	 }},
	 split:{value:function(){
	 	var lines=[];
		var midPoint={}
		midPoint.x=(point2.x-point1.x)/2;
		midPoint.y=(point2.y-point1.y)/2;
		var l1=new r.Line(point1,midPoint);
		var l2=new r.Line(midPoint,point2);
		lines.push(l1,l2);
		return lines;
	 }},
	 isEqualTo:{value:function(args){
	 	return JSON.stringify(this)==JSON.stringify(args);
	 }}
	});
};
var isFunction=function(arg){
	return typeof(arg)=='function';
};
var isString=function(arg){
	return typeof(arg)=='string';
};
r.if=function(condition){
	if(condition == 'undefined')
		return undefined;
	return {'then':function(n){
		return{'else':function(x){
			if(isFunction(n) && isString(x))
				return condition?n():x;
			if(isFunction(n) && isFunction(x))
				return condition?n():x();
			if(isFunction(condition))
				return condition()?n:x;
			return condition?n:x;
		}}},
		only_then:function(str){
			return condition?str():false;
		}
	};
};
r.calculate=function(operation){
	return eval(operation).toString();
};
r.switch=function(number,task){
	if (isFunction(number)) {
		task[number()]();
		return;
	};
	task[number]();
};
r.changeToHex=function(number) {
	return number.toString(16);
};

r.Circle=function(centre,num){
   	Object.defineProperties(this,{
		centre:{value:centre,enumerable:true},
		radius:{value:num,enumerable:true},
		area:{value:(22*num*num)/7},
		perimeter:{value:(2*22*num)/7},
		toString:{value:function(){return '[Circle @'+centre.x+','+centre.y+' radius:'+num+']'}},
		overlaps:{value:function(args){
			return (Math.sqrt(Math.pow((args.centre.x-this.centre.x),2)+Math.pow((args.centre.y-this.centre.y),2))<(this.radius+args.radius));
		}},
		moveTo:{value:function(newCentre){
			return new r.Circle(newCentre,this.radius);
		}},
		covers:{value:function(args){
			return (Math.sqrt(Math.pow((args.x-this.centre.x),2)+Math.pow((args.y-this.centre.y),2))<(this.radius));
		}},
		hasPoint:{value:function(args){
			return (Math.sqrt(Math.pow((args.x-this.centre.x),2)+Math.pow((args.y-this.centre.y),2))==(this.radius));
		}}
	});
};
r.reverseWords=function(str){
	return str.split(' ').map(function(x){
		return x.split('').reverse().join('');
	}).join(' ');
};
r.Complex=function(num1,num2) {
	 Object.defineProperties(this,{
		'x':{value: num1,enumerable :true},
		'y':{value: num2,enumerable:true},
		'toString':{ value:function(){
				if(num2<0){
				  return (num1+""+num2+"i")	
				}
				else{
			 		return (num1+"+"+num2+"i")
				};
			}
		},
		'+':{value:function(arg){
			return new r.Complex((this.x+arg.x),(this.y+arg.y));
		}},
		'-':{value:function(arg){
			return new r.Complex((this.x-arg.x),(this.y-arg.y));
		}},
		'*':{value:function(arg){
			return new r.Complex(((this.x*arg.x)+(this.y*arg.y*(-1))),((this.y*arg.x)+(this.x*arg.y)));
		}},
		'isEqualTo':{value:function(new_complex){
			return (this.toString() == new_complex.toString());
		}}
	});
};
var vowels=["a","e","i","o","u"];
var countVowels=function(text){
	var noOfVowels=0;
	text.split('').forEach(function(element){
		(vowels.indexOf(element.toLowerCase())>=0) && noOfVowels++;
	});
	return noOfVowels;
};
var getArrayOfVowelCount=function(array){
	var vowelCounts=[];
	array.forEach(function(element){
		vowelCounts.push(countVowels(element));
	});
	return vowelCounts;
};
var getGreatestNo=function(array){
	return Math.max.apply(null,array);
};

var getSmallestNo=function(array){
	return Math.min.apply(null,array);
};

r.findBestVowelWord=function(array) {
	var noOfVowelsInArray=getArrayOfVowelCount(array);
	var greatestNo=getGreatestNo(noOfVowelsInArray);
	return array[noOfVowelsInArray.indexOf(greatestNo)];
};
r.findWorstVowelWord=function(array) {
	var noOfVowelsInArray=getArrayOfVowelCount(array);
	var smallestNo=getSmallestNo(noOfVowelsInArray);
	return array[noOfVowelsInArray.indexOf(smallestNo)];
};
r.while=function(count) {
	if (count()) {
		return {do:function(increment){
			increment();
			r.while(count).do(increment)}};
		};
		return {do:new Function()};
};
r.add=function(arr,value) {
	var inc=function(x){
		return x+value;
	};
	return arr.map(inc);
};
r.impose=function(array1,array2){
	return array1.map(function(element,index){
		return (element+array2[index])||element;
	});
};

r.resizeArray=function(arr,value,obj) {
	if(arr.length){
		if((value&&(!obj))||value<arr.length){
		arr.length =value;
		return;
		}
	}
 	var condition=function(){
 		return (arr.length<value);
 	};
	var action=function(){
	arr.push(JSON.parse(JSON.stringify(obj)));
	};
	r.while(condition).do(action);	
};

r.Point=function(x,y){
	Object.defineProperties(this,{
		x:{value:x,enumerable:true},
		y:{value:y,enumerable:true},
		isOn:{value:function(args){
			if (args.radius!=undefined) {
				return (Math.sqrt((Math.pow((this.x-args.centre.x),2)+Math.pow((this.y-args.centre.y),2)))==args.radius);
			};
			return (this.y==args.findY(this.x));
		}},
		toString:{value:function(){
			return '['+"Point @x:"+this.x+",y:"+this.y+']';
		}},
		compareDistance:{value:function(args1,args2){
			return Math.sqrt(Math.pow((args1.y-y),2)+Math.pow((args1.x-x),2))-Math.sqrt(Math.pow((args2.y-y),2)+Math.pow((args2.x-x),2));
		}},
		isEqualTo:{value:function(args){
			return (x.toFixed(3)==args.x.toFixed(3))&&(y==args.y);
		}}
	});
};
r.readOctal=function(oct) {
	return parseInt(oct,8);
};
r.createNewArray=function(length,value) {
	var arr=new Array();
	var condition=function(){
		return (length>0);
	};
	var action=function(){
		 arr.push(JSON.parse(JSON.stringify(value)));
		 --length;
	};
	var newAction=function(){
		arr.push(value);
		--length;
	}
	if(!value){
		r.while(condition).do(newAction);
	}
	r.while(condition).do(action);
	return arr;
};
r.until=function(count) {
	if (!count()) {
		return {do:function(increment){
			increment();
			r.until(count).do(increment)}};
	};
	return {do:new Function()};
};
var factors=function(value){
	var devider=1;
	var counter=0;
	var condition=function(){return devider<=(value);};
	var action=function(){
		if(value%devider==0)
			++counter;
			++devider;
	};
	r.while(condition).do(action);
	return counter;
};
r.compare={
	circles:function(c1,c2){
		return c1.area-c2.area;
	},
	strings_by_length:function(str1,str2){
		return str1.length-str2.length;
	},
	numbers:function(a,b){
		return a-b;
	},
	numbers_descending:function(x,y){
		return y-x;
	},
	numbers_by_total_factors:function(num1,num2){
	return factors(num1)-factors(num2);
	},
	strings_by_vowel_count:function(str1,str2){
		return countVowels(str1)-countVowels(str2);		
	},
	numbers_odd_even:function(num1,num2){
		if(num1%2!=num2%2){
			return num2;
		}
		return num1-num2;
	},
	points:function(p1,p2){
		return Math.sqrt(Math.pow(p1.x,2)+Math.pow(p1.y,2))-Math.sqrt(Math.pow(p2.x,2)+Math.pow(p2.y,2));
	},
	short_strings:function(str1,str2){
		return str2.length-str1.length;
	}	
};
r.range=function(point1,point2,value){
	var arr=new Array();
	var condition=function(){
		return (point1<point2);
	};
	var action=function(){
		arr.push(point1);
		++point1;
	};
	var action1=function(){
		arr.push(point1);
		point1=(point1+value);
	};
	if (!value) {
		r.while(condition).do(action);
	};
	r.while(condition).do(action1);
	return arr;
};
r.readBinary=function(binary) {
	return parseInt(binary,2);
};
var isArray=function(arg){
	return toString.call(arg)=='[object Array]';
};
var getArrayOnly=function(arg){
	if(isArray(arg))
		return arg;
	return arg.split(' ');
};
r.decodeList=function(array){
	array=getArrayOnly(array);
	var cloneArray=JSON.parse(JSON.stringify(array));
	return cloneArray.reverse().map(function(element){
		return element.split('').reverse().join('');
	}).join(' ');
};
var isNumber=function(arg){
	return typeof(arg)=='number';
};
r.validatePositiveNumber=function(num){
	if(num<0){
		throw new Error('negative');
	};
	if(num!=Math.floor(num) && isNumber(num)){
		throw new Error('decimal');
	};
	if ((+num)*0!=0) {
		throw new Error('not a number');
	};
};
r.tidyText=function(text){
	return text.replace(/\s+/g,' ').trim();
};
r.readHex=function(hexa) {
	return parseInt(hexa,16);
};
r.fibonacci=function(num) {
	if(num<0||num%1!=0){
		return undefined;
	}
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
	return r.fibonacci(num-1)+r.fibonacci(num-2);
};
r.do=function(increment){
	return {
		while:function(condition){
			increment();
			if(condition())
			{
				r.do(increment).while(condition);
			}
		},
		until:function(condition){
			increment();
			if(!condition()){
				r.do(increment).until(condition);
			}
		},
		if:function(condition){
			if(condition())
				increment();
		},
		unless:function(condition){
			if(!condition())
				increment();
		}
	}
};
r.finder=function(compare){
	var arr=[];
	if(arguments[0]==undefined){
		var find=function(str){
			arr.push(str.toString());
			return arr.reduce(function(x,y){
				 return(x.length>y.length)?x:y;
			});
		}
		return find;
	}
	return function(str){
		arr.push(str.toString());
		return arr.reduce(function(x,y){
			 return (compare(x,y)>=0)?x:y;
		});
	};
};
r.sumOfDigits=function(digits){
	return eval(digits.toString().split('').join('+'))
};
r.Template=function(str){
	var temp=function(obj){
		var arr=str.split(" ");
		var myKeys=Object.keys(obj);
		myKeys.forEach(function(key){
			arr.forEach(function(data,index){
				arr[index]=data.replace(key,obj[key]);
			});
		});
		return arr.join(" ");
	};
	Object.defineProperty(temp,"apply",{value:function(o){
		return temp(o);
	},enumerable:false});
	return temp;
};	

r.getVowelCount=function(str){
	return countVowels(str);
};
r.Set=function(){
	var arr1=[];
	Array.prototype.forEach.call(arguments,function(x){
		arr1.push(x);
	});
	Object.defineProperties(arr1,{
		'union':{value:function(newArr){
			newArr.forEach(function(x){
				if(arr1.indexOf(x)<0){
					arr1.push(x);
				};
			});
			return r.Set.apply(null,arr1);
		}},
		'intersection':{value:function(newArr){
			var arr2=[];
			newArr.forEach(function(x){
				if(arr1.indexOf(x)>=0){
					arr2.push(x);
				};
			});
			return r.Set.apply(null,arr2);
		}},
		'cardinality':{get:function(){
			var arr2=[];
			arr1.forEach(function(x){
				if(arr2.indexOf(x)<0){
					arr2.push(x);
				};
			});
			return arr2.length;
		}},
		'isEqualTo':{value:function(newArr){
			if(this.length!=newArr.length){
				return false;
			}
			return this.every(function(x){
				return (newArr.indexOf(x)>=0);
			});
		}},
		'toString':{value:function(){
			var my_str="";
			arr1.forEach(function(x){
				my_str=my_str+x+"; "
			});
			my_str1=my_str.slice(0,my_str.length-2);
			return 'Set{'+my_str1+'}';
		}}
	});
	return arr1;
};
r.Sets={
	'phi': r.Set()
};
r.factorial=function(num){
	if(num==0){
		return 1;
	};
	return num*r.factorial(num-1);
};
r.changeToBinary=function(num){
	return +(num).toString(2);
};
r.changeToOctal=function(num){
	return +(num).toString(8);
};
r.what_are_these=function(){
	var myObj={};
	var myStr="";
	Array.prototype.forEach.call(arguments,function(x){Object.defineProperty(myObj,''+x,{enumerable:true});});
	Object.keys(myObj).forEach(function(x){myStr = myStr+x+" | "});
	return myStr.slice(0,myStr.length-3);
};
r.factors=function(value){
		var devider=1;
		var factorArray=[];
		var condition=function(){return devider<=(value);};
		var action=function(){
			if(value%devider==0)
				factorArray.push(devider);
				++devider;
	};
		r.while(condition).do(action);
		return factorArray;
};
r.is={
	greater_than_previous_number:function(x,i,arr){
		if(arr[i-1]){
			return arr[i-1]<x;
		}else{
			return true;
		};
	},
	the_point_on:function(circle){
		return function(point){return circle.hasPoint(point)};
	}
};
r.to={
	day:function(x){
			var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			var date=new Date(x);
			return days[date.getDay()];
	},
	nextDay:function(x){
		var date=new Date(x);
		date.setDate(date.getDate()+1);
		var date1=JSON.stringify(date).split("T");
		return date1[0].slice(1,11);
	},
	round_25_paise:function(x){
		var single_25=0.25;
		var dec_part=x-Math.floor(x);
		var quec=Math.floor(dec_part/single_25);
		var dec_mod=dec_part-(quec*single_25);
		var y;
		if(dec_mod<0.12){
			y=quec*single_25;
		}
		else{
			y=(quec+1)*single_25;
		};
		var value=(Math.floor(x)+y);
		return value;
	}
};
r.operate=function(){
	var object = arguments[0];
	var key=arguments[1];
	var arr=[];
	Array.prototype.forEach.call(arguments,function(x,index){
		if(index>1){
			arr.push(x);
		}
	});
	if(isString(key)){
		key=object[key];
	};
	if(isArray(object)){
		return object[key].apply(null,arr);
	};
	if(!arr){
		return key.apply(object);
	};
	return key.apply(object,arr);
};
r.accumulator=function(){
	var obj={};
	obj.value=0;
	if(arguments[0]){
		obj.value=arguments[0];
	};
	obj.add=function(){
		obj.value=obj.value+Array.prototype.reduce.call(arguments,function(x,y){return x+y;})
	};
	obj.remove=function(){
		obj.value=Array.prototype.reduce.call(arguments,function(x,y){return x-y;},obj.value)
	};
	obj.getValue=function(){return obj.value;};
	return obj;
};
var initial = function(init){
	init();
	return function(){
		return;
	};
};
r.for=function(initalazation,condition,updation){
	var init = initial(initalazation);
	if (condition()){
		return {do:function(action){
			action();
			updation();
			r.for(init,condition,updation).do(action)}};
		};
		return {do:new Function()};	
};
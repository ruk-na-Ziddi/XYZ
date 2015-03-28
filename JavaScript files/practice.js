var p = {};
exports.practice = p;
p.add=function(a,b){
	if(b==undefined){
		return a;
	};
	return a+b;
};
p.parenthesize=function(a){
	a="("+a+")"
	//a=a+("")
	return a;
};
p.comment=function(a){
	a="//"+a;
	return a;
};
p.apply=function(a,parenthesize,comment){
	a=parenthesize(a);
	a=comment(a);
	return a;
};
p.middle_element=function(array){
	if(array.length%2==0){
		return array[(array.length/2)-1];
	};
	return array[(array.length-1)/2];
};
p.common_elements_of=function(array1,array2){
	newArray=[];
	array1.forEach(function(el_of_ar1){
		array2.forEach(function(el_of_ar2){
			if(el_of_ar1==el_of_ar2)
				newArray.push(el_of_ar1);
		});
	});
	return newArray;
};
p.contains_even_numbers=function(array){
	var result=false;
	array.forEach(function(element){
		if(element%2==0){
			result= true;
		};
	}
	);
	return result;
};
p.every=function(array,isGreterThan5){
	var result=true;
	array.forEach(function(x){
		if(!isGreterThan5(x)){
			result=false;
			return result;
		}
	})
	return result;
};
p.some=function(array,fnrefer){
	var result=false;
	array.forEach(function(x){
		if(fnrefer(x)){
			result=true;
			return result;
		}
	})
	return result;
};
p.count_vowels=function(array){
	arrayStr=array.join('').split('');
	var resultArray=arrayStr.filter(function(x){
		return x=='a'||x=='A'||x=='e'||x=='E'||x=='i'||x=='I'||x=='o'||x=='O'||x=='u'||x=='U'
	});
	return resultArray.length;
};
p.largest_word_of=function(array){
	var result= array.reduce(function(x,y){
		return (x.length>y.length)?x:y;
	});
	return result;
};
p.words_beginning_with_consonant=function(array){
	var resultArray=array.filter(function(element){
		if(element[0]!='a'&& element[0]!='A'&&element[0]!='e'&&element[0]!='E'&&element[0]!='i'&&element[0]!='I'&&element[0]!='o'&&element[0]!='O'&&element[0]!='u'&&element[0]!='U'){
			return element;
		};
	});
	return resultArray;
};
p.separate=function(array,value){
	var resultArray1=array.filter(function(x){
		return x<value;
	});
	var resultArray2=array.filter(function(x){
		return x>=value;
	});
	return [resultArray1,resultArray2];
};
p.apply_many=function(str,arr){
	str=arr[1](str);
	str=arr[0](str);
	return str;
};
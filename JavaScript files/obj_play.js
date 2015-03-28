var Student=function(name,age,interest){
	this.name=name;
	this.age=age;
	this.interest=interest;
};

// Student.prototype={
// 	interested_in:function(x){
// 		 var result;
// 		 for(var index=0;index<this.interest.length;index++)
// 		 	if(this.interest[index]==x){
// 		 		return result=true;
// 		 	};
// 		 	return result=false;
// 	}
// };

Student.prototype={
	interested_in:function(data){
		var result=false;
		this.interest.filter(function(x){
			if (x==data){
				return result=true;
			};
		});
		return result;
	}
};

var s= new Student("jayanth","34",["guitar","footbal","jingo"]);

console.log(s.interested_in("guitar"));
console.log(s.interested_in("footbal"));
console.log(s.interested_in("jingo"));
console.log(s.interested_in("xyz"));


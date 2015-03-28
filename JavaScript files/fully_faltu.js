var myDetail={name:"ankur",work_in:"TW",dept:"STEP",type:"intern",quote:"fail && Try",DOB:
	{date:30,month:02,year:1995}
};

var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
   		keys.push(key);
   }
   return keys;
};



var getValues = function(obj){
	var values = [];
	for(var key in obj){
		values.push(obj[key]);
	}
	return values;
};

console.log(getKeys(myDetail));
console.log(getValues(myDetail));
console.log("*****************************");
console.log(getKeys(myDetail.DOB));
console.log(getValues(myDetail.DOB));
//instead of Object.keys(object_name);
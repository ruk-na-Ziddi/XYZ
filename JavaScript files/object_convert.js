var convert_to=function(unit_to_convert,value){
	var object={
				f_to_c: function (value){
					return ((9/5*value)+32)
				},
				c_to_f: function (value){
					return (5/9*(value-32))
				}
			};
			//var not_defined=function(){};
			//var anyFunction=object[unit_to_convert]||not_defined;
			//return anyFunction(value);
			return (object[unit_to_convert]==undefined)?undefined:object[unit_to_convert](value);//||not_defined(value);
};
console.log(convert_to("f_to_c",37));
console.log(convert_to("c_to_f",98.6));
console.log(convert_to("not_here",67));
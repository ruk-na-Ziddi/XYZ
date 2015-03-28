var assert = require("assert");
var test = {};

var person1 = {name:"Krishna",
				isFrom:{city:"Dwaraka",population_of_city:100000,stateDetail:{name:"Gujrat",capital:"Gandhinagar",population:40000000}},
				likes:["Milk"],
				loves:["Sweets"],
				Gender:"Male",
				do_not_like:["Bad Uncles"],
				hasCousins:105,
				hasChildren:0,
				hasBrother:0,
				hasSister:0,
				Brother_Name:"",
				Sister_Name:"Durga",
				Cousin_Name:"Arjun",
				proffession:"Charioteor",
				hates:[],
				can:""
			};

var person2 = {name:"Arjun",
				isFrom:{city:"Dwaraka",population_of_city:100000,stateDetail:{name:"Gujrat",capital:"Gandhinagar",population:40000000}},
				likes:["Milk"],
				loves:["Archery"],
				Gender:"Male",
				do_not_like:[],
				hasCousins:1,
				hasChildren:2,
				hasBrother:0,
				hasSister:0,
				Brother_Name:"",
				Sister_Name:"",
				Cousin_Name:"Krishna",
				proffession:"Warrior",
				hates:["Shah Rukh Khan movies"],
				can:""
			};


var person3 = {name:"Karan",
				isFrom:{city:"Kolkata",population_of_city:15000000,stateDetail:{name:"West Bengal",capital:"Kolkata",population:70000000}},
				likes:["Charity"],
				loves:["Sweets"],
				Gender:"Male",
				do_not_like:[],
				hasCousins:0,
				hasChildren:0,
				hasBrother:5,
				hasSister:0,
				Brother_Name:"",
				Sister_Name:"",
				Cousin_Name:"",
				proffession:"Warrior",
				hates:["Dishonesty"],
				can:"Fly planes"
			};

var person4 = {name:"Sudhama",
				isFrom:{city:"Bangalore",population_of_city:10000000,stateDetail:{name:"Karnataka",capital:"Bangalore",population:100000000}},
				likes:["Rice"],
				loves:["Sweets","Rain"],
				Gender:"Male",
				do_not_like:[],
				hasCousins:0,
				hasChildren:0,
				hasBrother:0,
				hasSister:1,
				Brother_Name:"",
				Sister_Name:"",
				Cousin_Name:"",
				proffession:"",
				hates:["Charity"],
				can:"Cook"
			};

var person5 = {name:"Durga",
				isFrom:{city:"Cuttack",population_of_city:1000000,stateDetail:{name:"Odisha",capital:"Bhuvaneswar",population:50000000}},
				likes:["Long walks","Idiots"],
				loves:["Flowers"],
				Gender:"Femail",
				do_not_like:[],
				hasCousins:0,
				hasChildren:0,
				hasBrother:0,
				Sister:1,
				Brother_Name:"Krishna",
				Sister_Name:"",
				Cousin_Name:"",
				proffession:"",
				hates:["Dishonesty","Bad Uncles"],
				can:"Perform Magic"
			};

var person6 = {name:"Ali",
				isFrom:{city:"Kolkata",population_of_city:15000000,stateDetail:{name:"West Bengal",capital:"Kolkata",population:70000000}},
				likes:["Sweets","Chaat"],
				loves:["Wrestling"],
				Gender:"Male",
				do_not_like:[],
				hasCousins:0,
				hasChildren:0,
				hasBrother:0,
				hasSister:0,
				Brother_Name:"",
				Sister_Name:"",
				Cousin_Name:"",
				proffession:"Scientist",
				hates:["Milk"],
				can:"Fly planes"
			};


var person = [person1,person2,person3,person4,person5,person6];
var is_From = function(city) {
	var result = [];
	person.forEach(function(x) {
		if (x.isFrom.city == city)
			result.push(x.name);
	});
	return result;
};
var do_like = function(choice) {
		var count = 0;
		person.forEach(function(x) {
		if (x.likes.filter(function(y){ return y == choice}) == choice){
				count += 1;
			};
		});
		return count;
};

var love_or_like = function(love_thing,like_thing){
	var result=[];
	person.forEach(function(x) {
		if (x.loves.filter(function(y){ return y ==love_thing })==love_thing || 
			x.likes.filter(function(y){ return y ==like_thing })==like_thing){
				result.push(x.name);
			};
	});
	return result;
};

var all_states = function() {
	var array = [];
	person.forEach(function(x) {
		array.push(x.isFrom.stateDetail.name);
	});
	var stateName = {};
	array.forEach(function(x){
		stateName[x] = stateName[x] || 0;
		});
	return Object.keys(stateName);
};

var total_population_of_states_where_person_hates_something = function(hatingThing) {
	var total = 0;
	person.forEach(function(x){
		if (x.hates.filter(function(y){ return y==hatingThing}) == hatingThing)
			total += x.isFrom.stateDetail.population;
	});
	return total;
};

var does_person_has_brothers = function(person_name){
	person_name=person.forEach(function(x){
		x.name;
	});
	var result = false;
	person.forEach(function(x){
		if (x.hasBrother!=0) {
			result=true;
		};
	});
	return result;
};

var can_person_do_something = function (person_name,task){
	person_name=person.forEach(function(x){
		x.name;
	});
	var result=false;
	person.forEach(function(x){
		if(x.can==task){
			result=true;
		}
	});
	return result;
};

var who_is_the_brother_of_person = function (person_name) {
	person_name = person.forEach(function(x){
		x.name;
	});
	var result = null;
	person.forEach(function(x){
		if(x.Brother_Name!="") {
			result = x.Brother_Name;
		};
	});
	return result;
};

var who_is_the_sister_of_person = function(person_name) {
	person_name = person.forEach(function(x){
		x.name;
	});
	var result = null;
	person.forEach(function(x){
		if(x.Sister_Name!="") {
			result = x.Sister_Name;
		};
	});
	return result;	
};

var how_many_people_live_in_state_capital = function(){
	var result=[];
	person.forEach(function(x){
		if(x.isFrom.city==x.isFrom.stateDetail.capital){
			result.push(x.name);
		};
	});
	return result.length;
};

var number_of_persons_like_or_unlike_something = function(gender,key,thing) {
	var count=0;
	var persons_who_choice_something = person.filter(function(data){
		return (data[key]==thing);
	});
	persons_who_choice_something.forEach(function(x){
		if(x.Gender==gender){
			count++;
		};
	});
	return count;
};

test.who_all_are_from_Dwaraka = function() {
	assert.deepEqual(is_From("Dwaraka"),["Krishna","Arjun"]);
};

// test.nobody_is_from_timbuktu = function() {
// 	assert.deepEqual(is_From("Timbuktu"),[]);
// };

// test.nobody_is_from_Kolkata = function() {
// 	assert.deepEqual(is_From("Kolkata"),["Karan","Ali"]);
// };

test.how_many_like_milk = function() {
	assert.deepEqual(do_like("Milk"),2);
};

// test.how_many_like_Rosogulla = function() {
// 	assert.deepEqual(do_like("Rosogulla"),0);
// };

test.who_all_love_Sweets_or_like_Milk = function() {
	assert.deepEqual(love_or_like("Sweets","Milk"),["Krishna","Arjun","Karan","Sudhama"]);
};

test.from_which_states_people_are = function(){
	assert.deepEqual(all_states(),["Gujrat","West Bengal","Karnataka","Odisha"]);
};

test.total_population_of_states_where_person_hates_Didhonesty = function(){
	assert.deepEqual(total_population_of_states_where_person_hates_something("Dishonesty"),120000000);
};

test.does_karan_has_brothers = function(){
	assert.equal(does_person_has_brothers("karan"),true);
};

test.can_durga_perform_magic = function(){
	assert.equal(can_person_do_something("Durga","Perform Magic"),true);
};

test.who_is_the_brother_of_Durga = function(){
	assert.equal(who_is_the_brother_of_person("Durga"),"Krishna");
};

test.who_is_the_sister_of_Krishna = function(){
	assert.equal(who_is_the_sister_of_person("Krishna"),"Durga");
};

test.how_many_people_live_in_state_capital = function(){
	assert.equal(how_many_people_live_in_state_capital(),3);
};

test.find_number_of_persons_likeOrUnlike_milk = function() {
	assert.equal(number_of_persons_like_or_unlike_something("Male","likes","Milk"),2);
};



exports.test = test;
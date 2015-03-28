var lodash = require('lodash');

var characters = [
  { 'name': 'barney',  'age': 36, 'blocked': true },
  { 'name': 'fred',    'age': 40, 'blocked': false },
  { 'name': 'pebbles', 'age': 1,  'blocked': true }
];
var list1 = [1,2,3,4,5,6,7,8,9,10,true,false,'',{},[[[[[[[[[[[[[]]]]]]]]]]]]]];
var list2 = [1,2,3,4,5,'ram','sam','prasenjit'];
var list3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(list1,'----->compact----->',lodash.compact(list1));
// console.log(list1,list2,'----->difference----->',lodash.difference(list1,list2));
// console.log(list2,list1,'----->difference----->',lodash.difference(list2,list1));
// console.log(list3,'----->findIndex----->',lodash.findIndex(list3,function(element) {return element%2==0}));
// console.log(characters,'----->findIndex----->',lodash.findIndex(characters,{age:1}));
// console.log(characters,'----->findIndex----->',lodash.findIndex(characters,'blocked'));

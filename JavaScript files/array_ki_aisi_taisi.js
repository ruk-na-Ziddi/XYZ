var num = [1,2,3,4,5];
console.log(num);

num.push(6);//returns the length
console.log(num);

num.push("I_can_Fly");
console.log(num);

num.push([7,8]);
console.log(num);

num.slice(0);//it will give [1,2,3,4,5,6,I_can_Fly,[7,8]]
console.log(num);

num.slice(1,7);//it will give [2,3,4,5,6,I_can_Fly]
console.log(num);

num.concat(5,6);//it gives [1,2,3,4,5,6,I_can_Fly,[7,8],5,6]
console.log(num);

num.concat([5,6]);//same as before
console.log(num);

num.pop();//removes the last element
console.log(num);

num.pop(5);//same as before
console.log(num);

num.unshift(11);// adds given element on beggining
console.log(num);

num.shift();//removes the first element
console.log(num);

num.shift(2);//yet removes first element
console.log(num);

num.splice(3);//gives all elements before given index
console.log(num);
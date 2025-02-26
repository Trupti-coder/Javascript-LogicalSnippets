const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21)); // Lydia is 21
console.log(sayHi.bind(person, 21))// function

//2 

function sayHi(){
    return(()=>0)();
}
console.log(typeof sayHi()); // number

// 3
// which of these values are falsy:
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
/* output :
0
''
undefined


There are 8 falsy values:

undefined
null
NaN
false
'' (empty string)
0
-0
0n (BigInt(0))
Function constructors, like new Number and new Boolean are truthy.

 */

// 4

console.log(typeof typeof 1);
// "string" bcoz typeof 1 is "number" typeof "number" returns "string"

// 5

const numbers=[1,2,3];
numbers[10]=11;
console.log(numbers); //  When you set a value to an element in an array that exceeds the length of the array, 
// JavaScript creates something called "empty slots".
//  These actually have the value of undefined,
//  but you will see something like: 
// [1, 2, 3, empty x 7, 11]
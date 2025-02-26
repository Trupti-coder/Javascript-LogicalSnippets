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
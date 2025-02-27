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


// 6
(()=>{
    let x,y;
    try {
        throw new Error();
    }
    catch(x){
        (x=1),(y=2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
// output: 1 undefined 2

// 7
/*  Everything in javascript is either a ...
 output: primitive or object
 
 JavaScript only has primitive types and objects.

Primitive types are boolean, null, undefined, bigint, number, string, and symbol.

What differentiates a primitive from an object is that primitives do not have any properties or methods;
 however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. 
 This is because when you try to access a property or method on a primitive like a string,
  JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. String,
   and then immediately discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behavior */

   // 8

  [[0,1],[2,3]].reduce(
    (acc,cur)=>{
        return acc.concat(cur);
    },
    [1,2],
  ); // output : [1, 2, 0, 1, 2, 3]

  // 9
  !!null; //fales : null is falsy.!null returns true. !true returns false.
  !!'';//false : "" is falsy. !"" returns true. !true returns false.
  !!1;//true : 1 is truthy. !1 returns false. !false returns true.

  // 10
  //What does the setInterval method return in the browser
  setInterval(()=>console.log("Hi"),1000); //output: return A unique Id

// 11
[...'lydia'];
//output:["L", "y", "d", "i", "a"]  A string is an iterable. The spread operator maps every character of an iterable to one element

// 12
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members); // [{ name: "Lydia" }]

// 13

const person={
    name:'Lydia',
    age:21
};
for(const item in person){
    console.log(item);
}
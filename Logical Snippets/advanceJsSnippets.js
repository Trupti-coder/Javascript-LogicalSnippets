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
    console.log(item); // "name", "age"

}

/* With a for-in loop,
 we can iterate through object keys, in this case name and age. Under the hood,
  object keys are strings (if they're not a Symbol). On every loop,
   we set the value of item equal to the current key it’s iterating over.
    First, item is equal to name, and gets logged. Then, item is equal to age, 
    which gets logged. */

    // 14
    console.log(3+4+'5'); // "75" 

    // 15
    //what is the value of num
    const num=parseInt('7*6',10); // 7
    /* Only the first number in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

   * is not a valid number.
     It only parses "7" into the decimal 7. num now holds the value of 7. */

     // 16
     [1, 2, 3].map(num => {
        if (typeof num === 'number') return;
        return num * 2;
      }); 
      
      /* output /;[undefined, undefined, undefined] 
      When mapping over the array, the value of num is equal to the element it’s currently looping over. 
      In this case, the elements are numbers, so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned from the function.

However,
 we don’t return a value.
  When we don’t return a value from the function, the function returns undefined. For every element in the array, the function block gets called, so for each element we return undefined. */

  // 17

  function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }
  
  const person = { name: 'Sarah' };
  const birthYear = '1997';
  
  getInfo(person, birthYear);
  
  console.log(person, birthYear); // output:{ name: "Lydia" }, "1997"

  // 18

  function greeting() {
    throw 'Hello world!';
  }
  
  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }
  
  sayHi();

  // output : Oh no an error: Hello world!

  /*   
  With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string 'Hello world!'.

With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world!'. e is now equal to that string, which we log. This results in 'Oh an error: Hello world!'.
        */

// 19
const set = new Set([1, 1, 2, 3, 4]);

console.log(set); //output:  {1, 2, 3, 4}

/* The Set object is a collection of unique values: a value can only occur once in a set.

We passed the iterable [1, 1, 2, 3, 4] with a duplicate value 1.
 Since we cannot have two of the same values in a set, one of them is removed.
  This results in {1, 2, 3, 4}. */



  // 20

  function sayHi(name) {
    return `Hi there, ${name}`;
  }
  
  console.log(sayHi());//ReferanceError


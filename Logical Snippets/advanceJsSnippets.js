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

// 21

const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person); // { name: "Lydia", age: 21 }
/* You're creating an object called person with properties name and age. You then try to assign person.city to a new variable city, but since city is not defined in the person object, the new variable city will be undefined.

After that, you assign the value 'Amsterdam' to the variable city. Note that this does not add a city property to the person object.

When you log the person object, it remains:   */

// 22

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21)); // ReferenceError

/* It looks like there's a small issue with your code.
 The variable message is defined inside the if and else blocks,
  so it is scoped to those blocks and not accessible outside of them.
  As a result, when you try to return message,
 it throws an error because message is not defined outside the blocks.  */

 // 23

 function getName(name) {
  const hasName = //
} //  !!name

// 24
console.log('I want pizza'[0]);// "I"
/* In order to get a character at a specific index of a string, 
you can use bracket notation. The first character in the string has index 0,
 and so on. In this case, we want to get the element with index 0,
 the character "I', which gets logged.   */

 // 24

 function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10); // 20

/* You can set a default parameter's value equal to another parameter of the function,
 as long as they've been defined before the default parameter.
  We pass the value 10 to the sum function. If the sum function only receives 1 argument,
   it means that the value for num2 is not passed, and the value of num1 is equal to the passed value 10 in this case.
    The default value of num2 is the value of num1, which is 10.
 num1 + num2 returns 20.   */

 // 25
 class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // object

// 26

let newList = [1, 2, 3].push(4);

console.log(newList.push(5)); // Error

// 28

function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);

// output: { constructor: ...} undefined

// 29

const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
} // output: name Lydia and age 21

//30
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")

// output: SyntaxError

// 31

function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

// 32
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))// output: [1, [2, 3, 4]]
console.log(getUser(user)) // output: SyntaxError



// 33
const names='Lydia';
console.log(names()); // output: TypoError

/* The variable name holds the value of a string, which is not a function, and thus cannot be invoked.

TypeErrors get thrown when a value is not of the expected type. JavaScript expected name to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word return as retrun. ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.   */ 

// 34 

// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`; // output : Impossible! You should see a therapist after so much JavaScript lol

/*[] is a truthy value. With the && operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value [] is a truthy value, so "Im' gets returned.

"" is a falsy value. If the left-hand value is falsy, nothing gets returned. n't doesn't get returned. */

// 35

const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three); // {} "" []

/* With the || operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

(false || {} || null): the empty object {} is a truthy value. This is the first (and only) truthy value, which gets returned. one is equal to {}.

(null || false || ""): all operands are falsy values. This means that the last operand, "" gets returned. two is equal to "".

([] || 0 || ""): the empty array[] is a truthy value. This is the first truthy value, which gets returned. three is equal to [].   */

// 36 

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
// output:  second, I have resolved! and I have resolved!, second

// 37

const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
} // output: 3, Lydia2, [object Object]2

// 38 

Promise.resolve(5);
// output:  Promise {<fulfilled>: 5}

/* We can pass any type of value we want to Promise.
resolve, either a promise or a non-promise. The method itself returns a promise with the resolved value (<fulfilled>). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value 5.
 It returns a resolved promise with the value 5.  */

 // 39 

 function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person); // They are the same!

// 40  

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);



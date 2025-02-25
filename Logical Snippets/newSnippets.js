// 1

function checkAge(data){
    if(data==={  age : 18 }){
        console.log('You are an adult..!')
    }
    else if(data=={age:18}){
        console.log("you are still an adult")
    }
    else{
        console.log('Hmm...you dont have an age i guess')
    }
}

checkAge({age:18}); // Hmm...you dont have an age i guess

/*  When testing equality, primitives are compared by their value,

 while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false. */

// 2

function getAge(...args) {
    console.log(typeof args);
  }
  
  getAge(21);

   // output : object  The rest parameter (...args) lets us "collect" all remaining arguments into an array.
  //  An array is an object, so typeof args returns "object"

  // 3

  function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  getAge(); // output : referance Error 
  
  // 4

  const sum = eval('10*10+5'); // output:105
  /* eval evaluates code that's passed as a string. If it's an expression,
   like in this case, it evaluates the expression.
    The expression is 10 * 10 + 5. This returns the number 105. */

// 5

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

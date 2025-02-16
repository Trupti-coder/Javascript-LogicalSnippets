console.log(typeof null); //object typeof null === "object" is a long-standing JavaScript bug.
console.log(typeof NaN); //Number NaN is actually a number, even though it's Not-a-Number.
console.log(typeof []); //Object Arrays ([]) are technically objects.
console.log(typeof function(){}); // function   Functions are a special type of object but return "function"

console.log(true+false); //1
console.log([]+{}); // "[object object]"
console.log({}+[]); //"[object object]"
console.log(0.1 +  0.2 === 0.3); //false
console.log([10,5,2,1].sort()); //[1,10,2,5]; sort() trats numbers as a strings


let arr=[1,2,3];
delete arr[1];
console.log(arr); //[1,empty,3]
console.log(arr.length); //3 delete removes the value but does not update length
arr.splice(1,1); // 3

console.log(typeof undefined); // "undefined"
console.log([] + []) // ""
console.log([] + {}); // "[object object]"
console.log({} + []); // "[object object]"


console.log(a);
let a = 10;
// output : ReferenceError: Cannot access 'a' before initialization
// let variables are hoisted but are in a "temporal dead zone" until declared

let arr1 = [1, 2, 3];
arr1[5] = 42;
console.log(ar1r.length); // 6

console.log(isNaN("Hello"));        // true  isNaN("Hello") → "Hello" is converted to a number, which is NaN.
console.log(Number.isNaN("Hello")); // false  Number.isNaN("Hello") → Does not convert, so returns false.


console.log([] instanceof Array);  // true
console.log({} instanceof Object); // true
console.log(function(){} instanceof Object); // true
console.log(null instanceof Object); // false



console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

console.log([] == ![]); //true


const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
//output:
// { a: "three", b: "two" }


console.log(typeof NaN); // number
console.log(NaN === NaN);//false

console.log(parseInt("10", 2));//2
console.log(parseInt("10", 8));//8
console.log(parseInt("10", 16));//16

let a1 = {};
let b = { key: "b" };
let c = { key: "c" };

a1[b] = 123;
a1[c] = 456;

console.log(a1[b]); // 456 

/* Object keys must be strings, but b and c are objects.
b and c are converted to "[object Object]".
The second assignment (a[c] = 456) overwrites the first (a[b] = 123). */

console.log(typeof typeof 1); 
// output:"string"  
// typeof 1 → "number"
// typeof "number" → "string"


function foo() {
    console.log("First");
}

foo();

function foo() {
    console.log("Second");
}

foo();

//output : 
// Second
// Second





console.log([] == ![]); // true

console.log({} + []);  // "[object Object]"


console.log([] + {});  // "[object Object]"



const obj = {};
obj[true] = "Yes";
obj[1] = "No";
obj["1"] = "Maybe";

console.log(obj); // { "true": "Yes", "1": "Maybe" }

const person = { name: "John" };
const newPerson = person;

delete newPerson.name;

console.log(person);  // {}


























//1
let c={name:'peter'};
let d;
d=c;
c.name='peter';
console.log(d.name); //peter 

// 2

var x;
var x=10;
console.log(x);  //10

// 3

// var x;
// let x=2;
// console.log(x); //x has  been already declared

// 4

let a=3;
let b= new Number(3);
console.log(a==b); //true , checks only value
console.log(a===b); // false , checks also datatype
console.log(typeof(b));
console.log(typeof(a));


// 5 

let name;
 nmae={};
console.log(name);


// 6

function fruit(){
    console.log("woof");
}

fruit.name='apple';
console.log(fruit()); // woof






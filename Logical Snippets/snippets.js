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


// 7

function sum(a,b){
    return a+b;
}
console.log(sum(1,"2")); //12



//8

let number=0;
console.log(number++); //0
console.log(++number); //2
console.log(number); //2



// 9

function getAge(...args){
    console.log( args);
    console.log(typeof args);
}
getAge(21);


//10

function getAge(){
   'use strict';
   age=21;
  console.log(age);  
}
getAge();  //referance error because when we use strict mode js  dosent allow to assign value to variable withou declaration


// 11

const sum1=eval('10*10+5');
console.log(sum); //105 eval convert string into num method in python


// 12

sessionStorage.setItem('cool_server',123) // how long is acessible in browser
// sessionstorage automatically remove when close tab or browser
// when we use localstorage  value is accessible till long time

// 13

const obj = {a:"one" ,b:"two" ,a:"repeat"};
console.log(obj);

// {a:"repeat",b:"two"}













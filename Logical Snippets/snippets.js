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
console.log(typeof(b)); // object
console.log(typeof(a));//number


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



// 14 

const obj1 = {1:"a", 2:'b',3:"c"};
console.log(obj.hasOwnProperty("1")); // true
console.log(obj.hasOwnProperty(1)); // true

//The hasOwnProperty() method is a function in JavaScript
//  that checks if an object has a particular property as its own




// 15
for(let i=1;i<5;i++){
    if(i===3) continue;// The continue statement is useful when you want to skip certain iterations based on a condition.
    console.log(i);

}

// 1 2 4


//16

const foo =()=>console.log('first');
const bar=()=> setTimeout(()=>console.log('second'));
const baz=()=>console.log('third');

bar();
foo();
baz();

// first
//third
//second



// 17
<div onclick="console.log('first div')">
    <div onclick='console.log("second div")'></div>
    <button onclick="console.log('button')">Click</button>
</div>

//button
//second div
//first div


// 17

const person ={name:'Lydia'};

function sayHi(age){
    return ${this.name} is ${age};
}
console.log(sayHi.call(person,21));
console.log(sayHi.bind(person,21));

// 18
function saHi(){
    return(()=>0)();
}
console.log( typeof saHi()); //number


// 19
function hii(){
    return()=>0;
}
console.log(typeof hii); // function

// 20

console.log(typeof typeof 1); //string

// 21 

function fruit(){
   
    console.log(name); //undefined
    console.log(price); //referance error

    var name='apple';
    let price=20;

}
fruit();

// 22

// 2

for(let i=0;i<3;i++){
    setTimeout(()=>{console.log(i),1});
}

//output ,here setTimeout function take some for execution before that loop is finish
3
3
3

// 23


for(let i=0;i<3;i++){
    setTimeout(()=>{console.log(i),1});
}

//output = 0 1 2  //let have block scope

// 24

console.log(+true); // 1 + before boolean convert it into number 
console.log(typeof +true); // number



// 25

console.log(!"anil");  //fasle
console.log(typeof("anil")); // string

// 26 

let data='size';
const bird ={
    size:'small',
};
console.log(bird[data]); // small
console.log(bird['size']); // small
console.log(bird.size); // small
console.log(bird.data); // undefined     //fun and variable name not work


// 27

const numbers=[1,2,3];
number[9]=11;
console.log(numbers); // [1,2,3,empty*6,11];






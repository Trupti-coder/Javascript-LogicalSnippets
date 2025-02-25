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

// 28
const numbers1=[1,2,3];
numbers[3]=numbers;
console.log(numbers);

// 29
//Everything in javascript is either a....
//A:primitive or object //ans 
//B:function or object
//c:trick question only objects
//d:number or object

// 30
console.log(!!null); // False
console.log(!!""); //false
console.log(!!1); //true

// 31

console.log(setInterval(()=>console.log("hi"),1000)); 
console.log(setInterval(()=>console.log("hi"),1000)); 
console.log(setInterval(()=>console.log("hi"),1000)); 
//1 2 3 hi hi hi hi hi hi......


// 32
let data1 =3+4+"5";
console.log(typeof data1); // String

//33
console.log(typeof []); // object

// 34

console.log([]==[]); // false

// 35

let data2=[1,2,3].map(num=>{
    if(typeof num === 'number') return;
    return num*2;
});
console.log(data2);
//geting undefine because return nothing empty.




// 36 

function getInfo(number){
    member.name="Anil";

}
const person1 = {name:'Sarah'};
getInfo(person);
console.log(person);

//Anil

// 37

function Car(){
    this.make='tata';
    return { make:"kia"};
}
const myCar=new Car();
console.log(myCar.make); //kia


// 38

(()=>{
    let x=(y=10); 
 })();
 console.log(typeof x);

 // 39

 console.log([1,2]+[3,4]); // "1,23,4"
 console.log([1,2]+3);//"1,23"
 console.log([1]-1); //0

 // 40 

 const names="Trupti";
 age=21;
 console.log(delete names); // false  Constants in JavaScript cannot be deleted.
 console.log(delete age); // true

// 41

let x=1;
let y=2;
let z=3;
x=y=z+1;
console.log(x,y,z); // 4 4 3  the value of z itself is not changed by this operation. It remains 3 because the assignment only affects x and y.

// 42
console.log(0.1+0.2===0.3); // false
console.log((0.1+0.2).toFixed(2)==="0.30"); // true

// 43

const obj={namee:"trupti",age:21};
const key="namee";

confirm.log(key in obj); //true
console.log("gender" in obj); //false

// 44

console.log(typeof null); // object 
console.log(null instanceof Object); // false

// 45 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  console.log(lydia); // Person {firstName: "Lydia", lastName: "Hallie"}
  console.log(sarah); // undefined








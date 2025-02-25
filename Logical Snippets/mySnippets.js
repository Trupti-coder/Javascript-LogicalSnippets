// 1

function sayHi(){
    console.log(name);
    console.log(age);
    var name='Lydia';
    let age=21
}
sayHi(); //output undefined and ReferanceError


// 2

const shape={
    radius:10,
    diameter(){
        return this.radius * 2;

    },
    perimeter: ()=>2*Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter());

//3

const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

 /* 
 
 A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid 

output: A: mouse.bird.size is not valid  mouse does not a key called bird thats why mouse.bird is undefined and then undefined.size isen't valid

*/

// 4

let c={greeting:'Hey'};
let d;
d=c;
c.greeting="Hello";
console.log(d.greeting); // Hello  In JavaScript, all objects interact by reference when setting them equal to each other

// 5

let a=3;
let b=new Number(3);
let c=3;

console.log(a==b); // true
console.log(a===b); // false
console.log(b===c); // false

/* When we use the == operator (Equality operator), it only checks whether it has the same value.
 They both have the value of 3, so it returns true.
However, when we use the === operator (Strict equality operator), 
both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false. */

// 6

class Chameleon{
    static colorChange(newColor){
        this.newColor=newColor;
        return this.newColor;
    }

    cunstructor({newColor='green'}={}){
        this.newColor=newColor;
 
    }
}

const freddie=new Chameleon({newColor:"purple"});
console.log(freddie.colorChange("orange"));  // TypeError

/* The colorChange function is static.
 Static methods are designed to live only on the constructor in which they are created,
  and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon,
   the function cannot be called upon it. A TypeError is thrown. */


   // 7

   let greeting;
   greetign={}; // typo
   console.log(greeting); // {}

   // 8

   function bark(){
    console.log("Woof !");

   }
   bark.animal="dog"; 

   






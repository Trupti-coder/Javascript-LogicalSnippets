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
console.log(d.greeting); 


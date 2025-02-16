function areObjectqEqual(obj1,obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);

}
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));//true
console.log(areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); //false  because order matters


// 2
console.log( 1 + "2" + 3 ); // "123"
console.log( 1 + 2 + "3" ); // "33"


// 3
console.log([]==false); // true
console.log({}==false); // false

// 4
var a=10;
(function (){
    console.log(a);
    var a=20;
})(); // undefined  because  Variable a is hoisted inside the function but not initialized yet

// 5

let a={};
let b=a;
a.prop=42;
console.log(b.prop); // 42 object are passed by referance in javascript

// 6
let arr=[10,20,30];
arr[100]=40;
console.log(arr.length); // 101
//Now, since arrays in JavaScript can be sparse (they don't need to have consecutive indices),
//  setting arr[100] = 40 creates a lot of empty slots in between.

// 7
console.log("5" - 3); //2
console.log("5"+ 3);//53
// - converts "5" to a number, but + triggers string concatenation

// 8
let obj1 = { a: 1 };
let obj2 = { a: 1 };

console.log(obj1 == obj2);  // false
console.log(obj1 === obj2); // false

// 9
var a = 5;
function test() {
    console.log(a);
    var a = 10;
}
test(); //undefined

// 10
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
//output
3
3
3

// 11
for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1000);
}
//output 1 2 3 bcoz let creates new scope for i in each loop iteration

//12
var x = 10;
function test() {
    console.log(x);
    var x = 20;
}
test();
 
//output : undefined

// 13

function test() {
    var x;
    console.log(x); // undefined
    x = 20;
}







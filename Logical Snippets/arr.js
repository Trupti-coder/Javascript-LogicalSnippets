//1 

let a=[1,2,3,4,5];
let b=a;
b[0]=100;
console.log(a);

// 2

const arr=[1,4,undefined,2,"apple","3","a","A",null];
arr.sort();
console.log(arr);

// output:[1,2,"3",4,"A","a","apple","null",undefined];


// 3

const arrays=[1, ,3];
console.log(0 in arr); // true
console.log(1 in arr); // true
console.log(arr.length); // 3 :  length of the array includes all elements and empty slots.
  
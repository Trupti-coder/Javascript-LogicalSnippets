console.log([] + []);
//output: ""
console.log([] + {});
//output:"[object object]"
console.log({} + []);
//output:"[object object]"

// 2

let x={a:1,b:2};
let y=x;
y.a=5
console.log(x.a);
//output:5 objects are referance types

// 3
console.log("start");
setTimeout(()=>console.log("Timeout"),0);
Promise.resolve().then(()=>console.log("Promise"));
console.log("End");
//output: Start
// End
// Promise
// Timeout
//This is because the Promise.then callback is processed before the setTimeout callback due to microtasks (promises) having higher priority than macrotasks (setTimeout) in the event loop.

// 4
console.log(typeof NaN);
//number  (NaN is a special type of number in JavaScript.)

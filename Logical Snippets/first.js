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
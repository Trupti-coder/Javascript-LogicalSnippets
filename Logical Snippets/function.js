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


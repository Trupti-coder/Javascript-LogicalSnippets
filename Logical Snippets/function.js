function areObjectqEqual(obj1,obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);

}
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));//true
console.log(areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); //false  because order matters


// 2
console.log( 1 + "2" + 3 ); // "123"
console.log( 1 + 2 + "3" ); // "33"

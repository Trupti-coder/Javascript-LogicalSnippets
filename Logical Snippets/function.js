function areObjectqEqual(obj1,obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);


}
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
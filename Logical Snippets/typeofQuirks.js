console.log(typeof null); //object typeof null === "object" is a long-standing JavaScript bug.
console.log(typeof NaN); //Number NaN is actually a number, even though it's Not-a-Number.
console.log(typeof []); //Object Arrays ([]) are technically objects.
console.log(typeof function(){}); // function   Functions are a special type of object but return "function"

console.log(true+false); //1
console.log([]+{}); // "[object object]"
console.log({}+[]); //"[object object]"
console.log(0.1 +  0.2 === 0.3); //false
console.log([10,5,2,1].sort()); //[1,10,2,5]; sort() trats numbers as a strings


let arr=[1,2,3];
delete arr[1];
console.log(arr); //[1,empty,3]
console.log(arr.length); //3 delete removes the value but does not update length
console.log(typeof null); //object typeof null === "object" is a long-standing JavaScript bug.
console.log(typeof NaN); //Number NaN is actually a number, even though it's Not-a-Number.
console.log(typeof []); //Object Arrays ([]) are technically objects.
console.log(typeof function(){}); // function   Functions are a special type of object but return "function"

console.log(true+false); //1
console.log([]+{}); // "[object object]"
console.log({}+[]); //"[object object]"
console.log(0.1 +  0.2 === 0.3); //false
console.log([10,5,2,1].sort()); //[1,10,2,5]; sort() trats numbers as a strings
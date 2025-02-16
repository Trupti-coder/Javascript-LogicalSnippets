console.log(typeof null); //object typeof null === "object" is a long-standing JavaScript bug.
console.log(typeof NaN); //Number NaN is actually a number, even though it's Not-a-Number.
console.log(typeof []); //Object Arrays ([]) are technically objects.
console.log(typeof function(){}); // function   Functions are a special type of object but return "function"
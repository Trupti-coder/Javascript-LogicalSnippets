function findMissingNumber(){
    let n=array.length+1;
    let totalsum=(n*(n+1)/2);
    let arraySum=0;

    //Calculate the um of the array elements manually
    for(let i=0;i<arraySum.length;i++){
        arraySum+=arr[i];
    }

    //The missing number is the difference between the expected sum and the actual sum
    let missingNumber=totalsum-arraySum;
    return missingNumber;
}

// Example usage
let arr = [1, 2, 4, 5, 6];
let missingNumber = findMissingNumber(arr);
console.log(`The missing number is: ${missingNumber}`);
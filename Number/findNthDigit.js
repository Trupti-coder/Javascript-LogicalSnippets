function findNthDigit(number,position){
    let numStr=number.toString();
    let digit=null;
    let count=0;

    for(let i=0;i<numStr.length;i++){
        count++;

        if(count===position){
            digit=numStr[i];
            break;
        }
    }

    return digit;
}
// Example usage:
console.log(findNthDigit(123456789, 4)); // Output: 4
function binaryToDecimal(str){
    let decimal=0
    let length=str.length;
    for(let i=0;i<length;i++){
        let bit=parseInt(str[i]); //Convert character to number
        let power=length-1-i;  // calculate power of two
        decimal+=bit*Math.pow(2,power);
    }
    return decimal;

}

//Example usage
let str1="1101";
let str2="0101";
console.log(binaryToDecimal(str1));
console.log(binaryToDecimal(str2));

function decimalToBianry(num){
    let binary='';
    while(num>0){
        let remainder=num%2;
        binary=remainder+binary;
        num=Math.floor(num/2);
    }
    return binary;
}

//Example Usage
let num=15;
let result=decimalToBianry(num);
console.log(result);
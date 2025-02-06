function binaryToDecimal(str){
    let decimal=0
    let length=str.length;
    for(let i=0;i<length;i++){
        let bit=parseInt(str[i]);
        let power=length-1-i;
        decimal+=bit*Math.pow(2,power);
    }

}
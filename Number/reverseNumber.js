function reverseNumber(num){
    //check if number is negative return false;
    if(num<0){
        return false;
    }
    let reverse=0;
    //reverse the number
    while(num>0){
        let digit=num%10; //get lats digit
        reverse=reverse*10+digit; //Add it to the reversed number
        num=Math.floor(num/10); //remove the last digit


    }
    //return reverse number
    return reverse;
}
console.log(reverseNumber(1234));

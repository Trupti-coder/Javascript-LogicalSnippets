function isPalindrome(num){
    //Negative number are not palindrome
    if(num<0){
        return false;
    }
    //store the original number
    let originalNum=num;
    let reverse=0;
    //Reverse the number
    while(num>0){
        let digit=num%10; //Get the last number
         reverse=reverse*10+digit; //Add it to the reversed number
        num=Math.floor(num/10);  //RRemove the last digit from the number

    }
    //checks if the original number and revesred number are the same 
    return originalNum===reverse

}

console.log(isPalindrome(121));//true
console.log(isPalindrome(-10));//false
console.log(isPalindrome(175));//false
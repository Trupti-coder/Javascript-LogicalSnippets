function isPalindrome(num){
    let originalNum=num;
    let reverse=0;
    while(num>0){
        let digit=num%10;
        let reverse=reverse*10+digit;
        num=Math.floor(num/10);

    }
    return originalNum===reverse

}
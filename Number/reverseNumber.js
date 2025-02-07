function reverseNumber(num){
    if(num<0){
        return false;
    }
    let reverse=0;

    while(num>0){
        let digit=num%10;
        let reverse=reverse*10+digit;
        num=num/10;


    }
    return reverse;
}
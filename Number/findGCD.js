function findGCD(a,b){
    if(a<=0) a=-a;
    if(b<=0) b=-b;

    while(b!==0){
        let remainder=a%b;
        a=b;
        b=remainder;
    }
    return a;

}

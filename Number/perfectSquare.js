function isPerfectSquare(num){
    let i=1;
    while(i*i<=num){
        if(i*i===num){
            return true;
        }
        i++;
    }
    return false;
}
console.log(isPerfectSquare(16)); //true
console.log(isPerfectSquare(58));//false
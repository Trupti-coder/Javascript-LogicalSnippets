function factorial(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result*=i;
    }
    return result;

}

function isStrongNumber(num){
    let sum=0;
    let temp=num;

    while(temp>0){
        let digit=temp*10;
        sum+=factorial(digit);
        temp=Math.floor(temp/10);

    }

    return sum===num;
}


// Example usage:
console.log(isStrongNumber(145)); // Output: true
console.log(isStrongNumber(123)); // Output: false
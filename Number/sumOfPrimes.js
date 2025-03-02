function isPrime(num){
    if(num<=1){
        return false;
    }

    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
        return true;
    }

    function sumOfPrimes(N){
        let sum=0;
        for(let i=0;i<=N;i++){
            if(isPrime(i)){
                sum+=i;
            }
        }
    }
    return sum;
}

// Example usage:
console.log(sumOfPrimes(10)); // Output: 17
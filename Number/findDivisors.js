function findDivisors(n){
    let divisors=[];
    for(let i=1;i*i<=n;i++){
        if(n%i===0){
            divisors.push(i);
            if(i!=n/i){
                divisors.push(n/i);
            }
        }
    }
    return divisors;

}
console.log(findDivisors(28));
console.log(findDivisors(12));
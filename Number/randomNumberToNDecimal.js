function roundToN(num,n){
    let factor=1;
    for(let i=0;i<n;i++){
        factor*=10;

    }
    return (Math.floor(num*factor+0.5))/factor;

}
console.log(roundToN(3.14159),2); //3.14
console.log(roundToN(2.1235,3)); //2.123
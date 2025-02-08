function roundToN(num,n){
    let factor=1;
    for(let i=0;i<n;i++){
        factor*=10;

    }
    return (Math.floor(num*factor+0.5))/factor;

}
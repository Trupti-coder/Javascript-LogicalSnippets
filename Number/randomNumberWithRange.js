function randomRange(min,max){
    let range=max-min+1;
    let random=0;

    //generating Random number
    for(let i=0;i<5;i++){
        random=(random*10+new Date().getMilliseconds()) % range;

}
return min+random;
}
console.log(randomRange(1,10)) //random number between 1 to 10
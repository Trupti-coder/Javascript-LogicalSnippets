function printHourglass(n){
    //Top Part

    for(let i=n;i>=1;i--){
        let line='';
        for(let j=1;j<=n;j++){
            line+=' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += '*';
        }
        console.log(line);
    }
}
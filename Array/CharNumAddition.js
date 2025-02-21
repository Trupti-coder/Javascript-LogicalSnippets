function numAddition(){
    let input="a2b4c6d3";
    let sum=0;
    for(let i=0;i<input.length;i++){
        if(input[i]>="0" && input[i]<="9"){
            let num=0;
            while(i<input.length && input[i]>="0" && input[i] <= "9"){
                num=num*10+(input[i]-"0");
                i++;
            }
            sum += num;
            i--;
        }
    }
    console.log(sum);
}
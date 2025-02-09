let n=5;
let charCode=97;
let num=1;

for(let i=0;i<n;i++){
    let line="";
    for(let j=0;j<=i;j++){
        if(j%2==0){
            line+=num;
            num++;
        }
        else{
            line += String.fromCharCode(charCode)
            charCode++; 
        }
    }
    console.log(line);
}
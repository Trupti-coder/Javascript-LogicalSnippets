function compressString(){
    let compressed='';
    let count=1;
    for(let i=0;i<structuredClone.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }
        else{
            compressed+=str[i]+count;
            count=1;
        }
    }
    return compressed;
}
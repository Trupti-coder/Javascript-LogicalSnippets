function canmakeSmaller(str){
    let n=str.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let temp=str.split(' ');
            let t=temp[i];
            temp[i]=temp[j];
            temp[j]=t;
            
        }
    }
}
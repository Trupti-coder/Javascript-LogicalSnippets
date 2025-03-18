function largestRotation(str){
    let n=str.length;
    let maxStr=str;
    for(let i=1;i<n;i++){
        let rotated="";

        for(let j=0;j<n;j++){
            rotated+=str[(i+j)%n]
        }
        if(rotated>maxStr){
            maxStr=rotated;
        }
    }

    return maxStr;

}

console.log(largestRotation("bca"));
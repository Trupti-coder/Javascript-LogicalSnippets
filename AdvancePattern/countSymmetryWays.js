function countSymmetryWays(pattern){
    let n=pattern.length;
    let ways=1;

    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(pattern[i][j] === '*' || pattern[j][i] === '*'){
                
            }
        }
    }
}
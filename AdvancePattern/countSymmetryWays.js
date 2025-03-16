function countSymmetryWays(pattern){
    let n=pattern.length;
    let ways=1;

    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(pattern[i][j] === '*' || pattern[j][i] === '*'){
                if(pattern[i][j] === '*' && pattern[j][i] === '*'){
                    ways *= 2;

                }
            }
            else if(pattern[i][j] !== pattern[j][i]){
                return 0;
            }
        }
    }
}
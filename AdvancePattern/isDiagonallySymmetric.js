function isDiagonallySymmetric(grid){

    let n=grid.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(grid[i][j]!==grid[j][i]){
                return false;
            }
        }
    }

    return true;

}
function growPattern(grid,t){
    let n=grid.length;
    let newGrid=JSON.parse(JSON.stringify(grid));

    while(t-->0){

        let temp = JSON.parse(JSON.stringify(newGrid));
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]===1){

                    if (i > 0) temp[i - 1][j] = 1;
                    if (i < n - 1) temp[i + 1][j] = 1;
                    if (j > 0) temp[i][j - 1] = 1;
                    if (j < n - 1) temp[i][j + 1] = 1;

                }
            }
        }

    }

}
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

//Example Usage

let grid2 = [
    ['a', 'b', 'c'],
    ['b', 'x', 'y'],
    ['c', 'y', 'z']
];
console.log("Is Diagonal Symmetric:", isDiagonallySymmetric(grid2));
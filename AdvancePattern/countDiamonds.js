function countDiamonds(grid){

    let count=0;
    let n=grid.length;

    for(let i=1;i<n-1;i++){
        for(let j=1;j<n-1;j++){
            let size=1;
            while(

                i - size >= 0 && i + size < n && j - size >= 0 && j + size < n &&
                grid[i - size][j] === 1 && grid[i + size][j] === 1 &&
                grid[i][j - size] === 1 && grid[i][j + size] === 1
              
            ){
                count++;
                size++;
            }
        }
    }

    return count;

}

// Test Cases
let grid1 = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];
console.log("Diamond Count:", countDiamonds(grid1));
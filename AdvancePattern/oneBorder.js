function oneBorder(matrix){

    let n = matrix.length;
    let m = matrix[0].length;

    // Check top and bottom rows
    for (let i = 0; i < m; i++){

        if (matrix[0][i] !== 1 || matrix[n - 1][i] !== 1) return false;

    }

     // Check left and right columns
     for (let i = 0; i < n; i++) {
        if (matrix[i][0] !== 1 || matrix[i][m - 1] !== 1) return false;

     }

     return true;

}


let borderMatrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log(isBorderAllOnes(borderMatrix)); // true
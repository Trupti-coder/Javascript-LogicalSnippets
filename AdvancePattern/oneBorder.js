function oneBorder(matrix){

    let n = matrix.length;
    let m = matrix[0].length;

    // Check top and bottom rows
    for (let i = 0; i < m; i++){

        if (matrix[0][i] !== 1 || matrix[n - 1][i] !== 1) return false;

    }

}
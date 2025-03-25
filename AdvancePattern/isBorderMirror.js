function isBorderMirror(matrix){


    let n = matrix.length;
    
    for (let i = 0; i < n; i++){

        for (let j = 0; j < n; j++){

            if (matrix[i][j] !== matrix[n - i - 1][j] || matrix[i][j] !== matrix[i][n - j - 1]) {
                return false; 
        }
    }
}

}
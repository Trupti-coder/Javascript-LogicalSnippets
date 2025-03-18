function isMagicSquare(matrix){



    let n = matrix.length;
    let sum = 0;
    
    for (let i = 0; i < n; i++) sum += matrix[0][i]; // First row sum

     // Check rows and columns
     for (let i = 0; i < n; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }


}
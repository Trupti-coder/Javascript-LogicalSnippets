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

        if (rowSum !== sum || colSum !== sum) return false;

    }

         // Check diagonals
    let diag1 = 0, diag2 = 0;
    for (let i = 0; i < n; i++) {
        diag1 += matrix[i][i];
        diag2 += matrix[i][n - i - 1];
    }

    return diag1 === sum && diag2 === sum;


}

//Example usage

console.log(isMagicSquare([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
])); // Output: true
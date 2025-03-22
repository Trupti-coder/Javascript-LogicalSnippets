function hasDiagonalZeros(matrix){

    let n = matrix.length;

    for (let i = 0; i < n; i++){

        if (matrix[i][i] !== 0 || matrix[i][n - i - 1] !== 0){

            return false;

        }

    }

    return true;

}


let zeroDiagonalMatrix = [
    [0, 1, 0],
    [2, 0, 3],
    [0, 4, 0]
];
console.log(hasDiagonalZeros(zeroDiagonalMatrix)); // true
function diagonalDifference(matrix){

    let n = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];


    }

    return Math.abs(mainDiagonalSum - secondaryDiagonalSum);

}

let diagMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [9, 8, 7]
];
console.log(diagonalDifference(diagMatrix)); // 0

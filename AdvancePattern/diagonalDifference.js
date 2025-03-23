function diagonalDifference(matrix){

    let n = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];


    }

}

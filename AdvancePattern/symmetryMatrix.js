function  isHorizontallySymmetric(matrix){


    let n = matrix.length;
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== matrix[n - i - 1][j]) {
                return false;
            }
        }
    }
    return true;

}
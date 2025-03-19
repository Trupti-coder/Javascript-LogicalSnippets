function isValidSpiral(matrix){

    let n = matrix.length;
    let total = n * n;
    let count = 1;
    let top = 0, left = 0, bottom = n - 1, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            if (matrix[top][i] !== count++) return false;
        }

}
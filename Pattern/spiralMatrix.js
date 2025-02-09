function printSpiralMatrix(n){
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1;
    let top = 0, left = 0;
    let bottom = n - 1, right = n - 1;
    while (value <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }

        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = value++;
        }

        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }
    
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '));
    }

    
    }


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

function isVerticallySymmetric(matrix){

    let n = matrix.length;
    for (let i = 0; i < n; i++){

        for (let j = 0; j < n / 2; j++){

            if (matrix[i][j] !== matrix[i][n - j - 1]) {
                return false;
            }

            
        }

    }

    return true;

}



// Test
let matrix = [
    [1, 2, 3],
    [4, 5, 4],
    [3, 2, 1]
];
console.log(isVerticallySymmetric(matrix)); // true
console.log(isHorizontallySymmetric(matrix)); // false
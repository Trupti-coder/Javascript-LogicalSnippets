function isChessboardPattern(matrix){


    let n = matrix.length;

    for (let i = 0; i < n; i++){


        for (let j = 0; j < n; j++){


            let expected = (i + j) % 2; // 0 for even sum, 1 for odd sum
            if (matrix[i][j] !== expected) {
                return false;
            }


        }
    }

}
function snakePattern(matrix){

    let n = matrix.length;
    let result = [];

    for (let i = 0; i < n; i++){

        if (i % 2 === 0) {
            for (let j = 0; j < n; j++){

                result.push(matrix[i][j]);
            }
    }


    else {
        for (let j = n - 1; j >= 0; j--) {
            result.push(matrix[i][j]);
        }
    }
}

}
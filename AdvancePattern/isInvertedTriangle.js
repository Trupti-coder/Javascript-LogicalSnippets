function isInvertedTriangle(matrix){


    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++){


            if (matrix[i][j] !== 1) return false;

        }

}

return true;
}
function isDiagonallyDominant(matrix){

    let n = matrix.length;
    for (let i = 0; i < n; i++){

        let diagonal = Math.abs(matrix[i][i]);
        let rowSum = 0;
        for (let j = 0; j < n; j++) {

            if (i !== j) rowSum += Math.abs(matrix[i][j]);

        }

        if (diagonal <= rowSum) return false;

    }

    return true;

}
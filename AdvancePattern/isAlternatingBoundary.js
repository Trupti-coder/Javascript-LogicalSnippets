function isAlternatingBoundary(matrix){


    let n = matrix.length;
    let current = matrix[0][0]; // Start with the first cell

    for (let i = 0; i < n; i++) {


        if (matrix[0][i] !== current || matrix[n-1][i] !== current) return false;
        if (matrix[i][0] !== current || matrix[i][n-1] !== current) return false;
        current = 1 - current; // Toggle between 0 and 1


    }

    return true;

}
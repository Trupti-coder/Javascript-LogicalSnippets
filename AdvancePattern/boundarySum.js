function boundarySum(matrix){


    let n = matrix.length;
    let sum = 0;

    for (let i = 0; i < n; i++){

        for (let j = 0; j < n; j++){


            // Add only boundary elements
            if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                sum += matrix[i][j];
            }


        } 
    }

    return sum;

}
function isCenterExpanding(matrix){


    let n = matrix.length;
    let mid = Math.floor(n / 2);

    for (let i = 0; i <= mid; i++){


        for (let j = 0; j <= mid; j++){
            if(

                matrix[i][j] !== matrix[n - i - 1][j] ||
                matrix[i][j] !== matrix[i][n - j - 1] ||
                matrix[i][j] !== matrix[n - i - 1][n - j - 1]





            ){

                
            }
        }
    }

}
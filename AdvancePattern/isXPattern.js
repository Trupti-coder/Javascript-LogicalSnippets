function isXPattern(matrix){

    let n = matrix.length;
    for (let i = 0; i < n; i++){

        for (let j = 0; j < n; j++) {


            if (i === j || i + j === n - 1) {
                if (matrix[i][j] !== 1) return false;
            
            }

            else{


                
            }



        }

    }

}
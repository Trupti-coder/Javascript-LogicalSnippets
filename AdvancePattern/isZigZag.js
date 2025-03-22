function isZigZag(matrix){


    let n = matrix.length;
    let count = 1;

    for (let i = 0; i < n; i++){


        if (i % 2 === 0) {
            for (let j = 0; j < n; j++){

                if (matrix[i][j] !== count++) return false;
            }
        }

            else{


                for (let j = n - 1; j >= 0; j--) {
                    if (matrix[i][j] !== count++) return false;
                }



            }



    }



}
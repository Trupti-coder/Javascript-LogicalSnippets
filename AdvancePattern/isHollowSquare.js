function isHollowSquare(matrix) {


    let n = matrix.length;

    for (let i = 0; i < n; i++){

        for (let j = 0; j < n; j++){

             // Border check
             if (i === 0 || j === 0 || i === n - 1 || j === n - 1){


                if (matrix[i][j] !== 1) return false;
            } else {
                if (matrix[i][j] !== 0) return false;
            }


             }
        }


        return true;
    }


    let hollowSquare = [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1]
    ];
    console.log(isHollowSquare(hollowSquare)); // true



function isCrossPattern(matrix){


    let n = matrix.length;
    let mid = Math.floor(n / 2);


    for (let i = 0; i < n; i++) {


        for (let j = 0; j < n; j++){


            if (i === mid || j === mid) {
                if (matrix[i][j] !== 1) return false;
            } 

            else{

                
            }


        }


    }



}
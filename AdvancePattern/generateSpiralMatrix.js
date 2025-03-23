function generateSpiralMatrix(matrix){
    let matrix=[];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }


    let count = 1;
    let top = 0, left = 0, bottom = n - 1, right = n - 1;

    while (top <= bottom && left <= right){

        for (let i = left; i <= right; i++) {
            matrix[top][i] = count++;
        }

        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = count++;
        }


        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = count++;
            }
            bottom--;
        }



        
    }


}
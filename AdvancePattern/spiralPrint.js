function spiralPrint(matrix){

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let result = [];

    while (top <= bottom && left <= right){

        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;
        
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

    }


}
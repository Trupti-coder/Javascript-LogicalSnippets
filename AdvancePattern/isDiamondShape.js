function isDiamondShape(matrix){

    let n = matrix.length;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < n; i++){



        for (let j = 0; j < n; j++) {
            let distance = Math.abs(mid - i) + Math.abs(mid - j);
            if ((distance <= mid && matrix[i][j] !== 1) || (distance > mid && matrix[i][j] !== 0)) {
                return false;
            }
    } 
}


return true;
}

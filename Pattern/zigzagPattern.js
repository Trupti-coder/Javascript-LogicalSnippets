function printZigzagPattern(rows,cols){
    let currentNumber=1;
    let result='';
    for(let i=0;i<rows;i++){
        let row=[];

        for(let j=0;j<cols;j++){
            rows.push(currentNumber++);
        }
        if(i%2!==0){
            row.reverse();
        }
        result+=row.join(' ')+'\n';
    }
    console.log(result);
}
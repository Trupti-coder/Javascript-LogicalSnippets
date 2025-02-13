function printNumberTriangle(rows){
    for (let i = 1; i <= rows; i++){

        let line = '';
        // Create the numbers for the current line
        for (let j = 1; j <= i; j++){
            line += j + ' ';

        }
         // Print the current line
         console.log(line.trim());

    }
}
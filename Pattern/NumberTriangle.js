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

// Example usage:
printNumberTriangle(5);


/* Output:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
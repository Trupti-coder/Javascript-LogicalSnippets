function printPyramid(height){
    for (let i = 1; i <= height; i++) {
        let line = '';

        // Add spaces
        for (let j = 1; j <= (height - i); j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += '*';
        }

        console.log(line);
    }


}
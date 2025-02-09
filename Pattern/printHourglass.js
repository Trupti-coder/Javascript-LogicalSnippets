function printHourglass(n){
    //top part

    for (let i = n; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += '*';
        }
        console.log(line);
    }

     // Bottom part
     for (let i = 2; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += '*';
        }
        console.log(line);
    }

}
function printDiamond(n){

    // Upper part of the diamond
    for (let i = 1; i <= n; i++) {
        let line = '';

          // Add spaces
          for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += '*';
        }

        console.log(line);

    }

       // Lower part of the diamond
       for (let i = n - 1; i >= 1; i--) {
        let line = '';

       }

}
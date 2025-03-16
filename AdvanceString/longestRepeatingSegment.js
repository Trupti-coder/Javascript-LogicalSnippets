function longestRepeatingSegment(str){

    let n = str.length;
    let maxLen = 0;
    let longestSegment = "";

    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {

            let sub = str.substring(i, i + len);
            let count = 0;

            for (let j = 0; j + len <= n; j++){

                if (sub === str.substring(j, j + len)){
                    count++;
                }

            }


        }
    }


}
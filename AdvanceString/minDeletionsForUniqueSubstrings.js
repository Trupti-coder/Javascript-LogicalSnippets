function minDeletionsForUniqueSubstrings(str){

    let n = str.length;
    let minDeletions = 0;

    for (let len = 1; len < n; len++){

        for (let i = 0; i <= n - len; i++){

            let count = 0;

            for (let j = i + 1; j <= n - len; j++){
                let isSame = true;
                for (let k = 0; k < len; k++){

                    if (str[i + k] !== str[j + k]){

                        isSame = false;
                        break;

                    }  

                }

                if (isSame) {
                    count++;
            }
        }

        minDeletions += count;

    }

    

}
return minDeletions;

}

console.log(minDeletionsForUniqueSubstrings("abab"));

// Output: 2


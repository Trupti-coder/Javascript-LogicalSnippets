function isRotatedSubstring(s1,s2){

    if (s1.length !== s2.length) return false;

    let n = s1.length;
    for (let i = 0; i < n; i++){

        let match = true;
        for (let j = 0; j < n; j++){


            if (s1[j] !== s2[(i + j) % n]) {
                match = false;
                break;
            }


        }

        if (match) return true;

    }

    return false;

}



console.log(isRotatedSubstring("abcde", "cdeab")); // Output: true
console.log(isRotatedSubstring("abcde", "edcba")); // Output: false
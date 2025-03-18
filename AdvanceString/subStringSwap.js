function subStringSwap(str){

    let n = str.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++){

        
   for (let j = i + 1; j < n; j++){ 

    // Swap characters
    let swapped = "";
    for (let k = 0; k < n; k++) {
        if (k === i) swapped += str[j];
        else if (k === j) swapped += str[i];
        else swapped += str[k];
    }

    // Check if the string is balanced
    let count = 0;
    let valid = true;
    for (let k = 0; k < n; k++) {
        if (swapped[k] === '(') count++;
        else if (swapped[k] === ')') count--;
        if (count < 0) {
            valid = false;
            break;
        }
    }


    if (valid && count === 0) {
        let len = j - i + 1;
        if (len > maxLen) maxLen = len;
    }


     
}

    }

    return maxLen;

}
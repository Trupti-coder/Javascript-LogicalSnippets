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


     
}

    }

}
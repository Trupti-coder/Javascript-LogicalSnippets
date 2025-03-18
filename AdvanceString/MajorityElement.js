function majorityElement(arr){

    let candidate = -1;
    let count = 0;

    // Step 1: Find a candidate using Boyer-Moore Voting Algorithm
    for (let i = 0; i < arr.length; i++){

        if (count === 0) {
            candidate = arr[i];
            count = 1;


        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }



    }

}
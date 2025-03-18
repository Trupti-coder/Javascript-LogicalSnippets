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

     // Step 2: Validate the candidate
     count = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === candidate) count++;
     }
 
     return count > arr.length / 2 ? candidate : -1;

}


console.log(majorityElement([2, 2, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 2, 3, 4])); // Output: -1
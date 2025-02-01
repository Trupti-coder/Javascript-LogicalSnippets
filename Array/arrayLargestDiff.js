function largestDifference(arr){
    if (arr.length < 2) {
        return 0; // If there are fewer than 2 elements, there's no meaningful difference
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max - min;

}

// Example usage:
let array = [1, 2, 9, 4, 5, -3];
let difference = largestDifference(array);
console.log(difference);  // Output: 12
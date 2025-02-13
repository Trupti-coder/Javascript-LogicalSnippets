function insertionSortDescending(arr){

    let n = arr.length;

    for (let i = 1; i < n; i++){

        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;

    }
    return arr;

}

// Example Usage
let numbers = [64, 25, 12, 22, 11];
console.log(insertionSortDescending(numbers)); 
// Output: [64, 25, 22, 12, 11]
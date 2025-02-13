function insertionSort(arr){
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

         // Shift elements of arr[0..i-1] that are greater than current
         while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;

    }

    return arr;

}

// Example Usage
let numbers = [64, 25, 12, 22, 11];
console.log(insertionSort(numbers)); 
// Output: [11, 12, 22, 25, 64]
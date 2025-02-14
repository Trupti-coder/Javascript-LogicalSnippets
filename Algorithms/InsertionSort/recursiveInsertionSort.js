function recursiveInsertionSort(arr,n=arr.length){
    if(n<=1)return;

        // Sort first n-1 elements
        recursiveInsertionSort(arr, n - 1);

        let last =arr[n-1];
        let j=n-2;

        while (j >= 0 && arr[j] > last) {
            arr[j + 1] = arr[j];
            j--;
        }


    arr[j + 1] = last;
    return arr;


}

// Example Usage
let numbers = [64, 25, 12, 22, 11];
console.log(recursiveInsertionSort(numbers));
 // Output: [11, 12, 22, 25, 64]
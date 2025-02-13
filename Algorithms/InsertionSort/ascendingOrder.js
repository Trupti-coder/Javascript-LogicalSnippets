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

    }

}
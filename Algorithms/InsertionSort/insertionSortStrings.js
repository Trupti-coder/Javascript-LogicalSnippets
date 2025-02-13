function insertionSortStrings(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++){

        let current = arr[i].toLowerCase();
        let original = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j].toLowerCase() > current) {
            arr[j + 1] = arr[j];
            j--;

    }
    arr[j + 1] = original;

  }

return arr;

}

// Example Usage

let words = ["Banana", "apple", "Cherry", "date"];
console.log(insertionSortStrings(words)); 
// Output: ["apple", "Banana", "Cherry", "date"]
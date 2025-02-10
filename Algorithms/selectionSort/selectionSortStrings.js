function selectionSortObjects(arr, key){

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;


        for (let j = i + 1; j < n; j++) {
            if (arr[j][key] < arr[minIndex][key]) {
                minIndex = j;
            }

        }
         // Swap elements
         let temp = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex] = temp;


    }
    return arr;

}


// Example Usage
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
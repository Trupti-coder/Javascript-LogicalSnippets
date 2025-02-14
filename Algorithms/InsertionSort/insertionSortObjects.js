function insertionSortObjects(arr,key){
    let n=arr.length;

    for(let i=1;i<n;i++){
        let current=arr[i];
        let j=i-1;

        while (j >= 0 && arr[j][key] > current[key]) {
            arr[j + 1] = arr[j];
            j--;
    }
    arr[j + 1] = current;

}
return arr;

}

// Example Usage
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];


console.log(insertionSortObjects(people, "age"));
// Output: [
// {name: "Bob", age: 20},
//  {name: "Alice", age: 25},
//  {name: "Charlie", age: 30}
//]
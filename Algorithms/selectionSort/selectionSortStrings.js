function selectionSortStrings(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let minIndex=i;

        for(let j=i+1;j<n;j++){
            if(arr[j].toLowercase()<arr[minIndex].toLowercase()){
                minIndex=j;
            }
        }
        //swap elements

        let temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }

    return arr;
}

// Example Usage
let words = ["Banana", "apple", "Cherry", "date"];
console.log(selectionSortStrings(words));
 // Output: ["apple", "Banana", "Cherry", "date"]
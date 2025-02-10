function selectionSortDescending(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let maxIndex=i;

        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[maxIndex]){
                maxIndex=j;
            }
        }

        //swap elements
        let temp=arr[i];
        arr[i]=arr[maxIndex];
        arr[maxIndex]=temp;
    }

    return arr;
}


// Example Usage

let numbers = [64, 25, 12, 22, 11];
console.log(selectionSortDescending(numbers)); 
// Output: [64, 25, 22, 12, 11]
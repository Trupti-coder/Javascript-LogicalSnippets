function selectionSort(arr){

    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let minIndex=i;
    }

    for(let j=i+1;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j;
      }  
      //swap elements

    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;

    }

    return arr;

}

// Example Usage
let numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers)); // Output: [11, 12, 22, 25, 64]
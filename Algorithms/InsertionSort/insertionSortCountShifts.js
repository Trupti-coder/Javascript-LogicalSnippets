function insertionSortCountShifts(arr){

    let n=arr.length;
    let shiftCount=0;

    for(let i=1;i<n;i++){
        let current=arr[i];
        let j=i-1;
    

    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
        shiftCount++; // Count the shift
    }
    arr[j + 1 ]=current;

}
console.log("Total Shifts:", shiftCount);
return arr;

}

// Example Usage
let numbers = [64, 25, 12, 22, 11];
console.log(insertionSortCountShifts(numbers)); 
// Output: Total Shifts: 10
//         [11, 12, 22, 25, 64]
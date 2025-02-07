function moveZeroesToEnd(arr){
    let nonZeroIndex=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]!==0){
            let temp=arr[nonZeroIndex];
            arr[nonZeroIndex]=arr[i];
            arr[i]=temp;

            nonZeroIndex++;
        }
    }
    return arr;
}
const arr=[0,1,4,5,7,0,3,0,9];
console.log(moveZeroesToEnd(arr));
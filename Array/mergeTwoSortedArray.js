function mergeSortedArrays(arr1,arr2){
    let mergedArray=[];
    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else{
            mergedArray.push(arr2[j]);
        }
    }

}
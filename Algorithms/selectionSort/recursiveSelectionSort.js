function recursiveSelectionSort(arr,start=0){
    if(start>=arr.length-1)return arr;

    let minIndex=start;
    for(let i=start+1;i<arr.length;i++){
        if(arr[i]<arr[minIndex]){
            minIndex=i;
        }
    }

    //swap
    [arr[start],arr[minIndex]]=[arr[minIndex],arr[start]];
    return recursiveSelectionSort(arr,start+1);
    
}


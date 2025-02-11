function selectionSortStrings(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let minIndex=i;

        for(let j=i+1;j<n;j++){
            if(arr[j].toLowercase()<arr[minIndex].toLowercase()){
                minIndex=j;
            }
        }
    }

}
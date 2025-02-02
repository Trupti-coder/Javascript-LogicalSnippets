function findSecondSmallest(arr){
    if(arr.length<2){
        return false;
    }

    let smallest=Infinity;
    let secondSmallest=Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest=smallest;
            smallest=arr[i];
        }

    }

}
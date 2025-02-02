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
        else if(arr[i]<secondSmallest && arr[i]!==smallest){
            secondSmallest=arr[i];
        }

    }
    return secondSmallest===Infinity?null:secondSmallest;

}
//Example usage
var number=[5,3,8,1,2];
var result=findSecondSmallest(number);
console.log("second smallest:",result);
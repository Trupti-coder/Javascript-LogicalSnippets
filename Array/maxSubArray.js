function maxSubArray(arr){
    if(arr.length===0){
        return 0;
    }

    let maxSum=arr[0];
    let currentSum=arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>currentSum+arr[i]){
            currentSum=arr[i];
        }
        else{
            currentSum=currentSum+arr[i];
        }
    }
}
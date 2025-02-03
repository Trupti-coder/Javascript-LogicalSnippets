function maxSubArray(arr){
    if(arr.length===0){
        return 0;
    }

    let maxSum=arr[0]; //start with the first element as the maximum sum;
    let currentSum=arr[0]; //Initialize the current sum with the first element

    for(let i=1;i<arr.length;i++){
        if(arr[i]>currentSum+arr[i]){
            currentSum=arr[i]; //start a new subArray
        }
        else{
            currentSum=currentSum+arr[i]; //Extend the current subArray.
        }
       // Update maxSum if currentSum is greater 
        if(currentSum>maxSum){
            maxSum=currentSum;
        }
    }
    return maxSum;
}
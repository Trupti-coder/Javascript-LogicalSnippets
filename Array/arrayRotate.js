function rotateArray(array,k){
    let n=arr.length;
    k = k % n;// handle if k is greater than the array length
    let result=[];

    //fill the rotated position in the result array
    for(let i=0;i<n;i++){
        result[(i+k)%n]=arr[i];
    }

    //copy the result array back to the original array

}
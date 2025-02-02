function findMajorElement(arr){
    let maxCount=0; 
    let majorityElement=null;

    for(let i=0;i<arr.length;i++){
        let count=0;
    

    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }

    if(count>maxCount){
        maxCount=count;
        majorityElement=arr[i];
    }
}

return majorityElement;

}
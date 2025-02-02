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
//Example
let arr=[1,2,3,4,4,5,6,7,8,9,9,9,9];
console.log(findMajorElement(arr));
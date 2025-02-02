function findPairs(arr,target){
    let pairs=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;i++){
            if(arr[i]+arr[j]===target){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;
}

//Example usage
let arr=[1,2,3,4,5,6,7,8,9,0];
let target=18;
console.log(findPairs(arr,target));
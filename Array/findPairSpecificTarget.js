function findPairs(arr,k){
    let pairs=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;i++){
            if(arr[i]+arr[j]===k){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;


}
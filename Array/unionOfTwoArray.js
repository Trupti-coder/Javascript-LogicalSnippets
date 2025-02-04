function findUnion(arr1,arr2){
    let result=[];

    for(let i=0;i<arr1.length;i++){
        if(!result.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }

    for(let j=0;j<arr2.length;j++){
        if(!result.includes(arr2[j])){
            result.push(arr2[j]);
        }
    }
    return result;
}
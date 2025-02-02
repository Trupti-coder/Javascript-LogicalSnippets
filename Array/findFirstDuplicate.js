function findFirstDuplicate(arr){
    let seen={};
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]){
            return arr[i];
        }
        seen[arr[i]]=true;
    }
    return -1;

}
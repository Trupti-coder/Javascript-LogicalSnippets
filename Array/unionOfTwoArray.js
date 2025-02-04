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

let arr1=[1,2,3,4,5];
let arr2=[5,6,7,8,9];
console.log(findUnion(arr1,arr2));
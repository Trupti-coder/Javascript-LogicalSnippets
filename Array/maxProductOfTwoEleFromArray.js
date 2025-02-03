function maxProduct(arr){
    let max=Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let product=arr[i]*arr[j];
            if(product>max){
                max=product;
            }
        }
    }
    return max;
}
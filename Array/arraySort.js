function sortArray(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                //swap elements
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;

}

//Example usage
let array=[1,4,6,8,3,4];
console.log(sortArray(array));
//output:[1,3,4,4,6,8]
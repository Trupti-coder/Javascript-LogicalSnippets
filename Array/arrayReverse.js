function reverseArray(array){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        //swap elements at start and end 
        var temp=array[start];
        array[start]=array[end];
        array[end]=temp;

        //Move towards the middle
        start++;
        end--;
    }
    return array;

}

//Example Usage
var originalArray=[1,2,3,4,5,6];
var newArray=reverseArray(originalArray);
console.log(newArray);
//output: [6,5,4,3,2,1]
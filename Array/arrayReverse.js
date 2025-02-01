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

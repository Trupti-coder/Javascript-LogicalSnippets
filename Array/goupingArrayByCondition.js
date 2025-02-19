function groupByCondition(arr,condition){
    //Create two empty array for grouping eleemnt

    let group1=[];
    let group2=[];

    // Iterate through the array
    for(let i=0;i<arr.length;i++){

        //Check the condition and push elements into the the respective groups

        if(condition(arr[i])){
            group1.push(arr[i]);
        }
        else{
            group2.push(arr[i]);
        }

    }
}
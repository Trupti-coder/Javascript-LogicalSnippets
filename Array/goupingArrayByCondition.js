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

    // Return an array containing the two groups

    return [group1,group2];
}

// Example usage: Group even and odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let groupedNumbers = groupByCondition(numbers, function(num) {
    return num % 2 === 0; // Condition for even numbers
});

console.log(groupedNumbers); // Output: [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
function generateSeries(){

    let series=[];
    for(let i=1;i<=10;i++){
        series.push(i)  //Add the number to the series

        series.push(i*2); //Add The number multiplied by 2 to the series
    }

    return series; //Return the series
  

}

//example usage
let result=generateSeries()
console.log(result); // // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12, 7, 14, 8, 16, 9, 18, 10, 20]
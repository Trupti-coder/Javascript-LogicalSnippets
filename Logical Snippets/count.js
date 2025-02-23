let count=0;
function increment(value=++count){
    console.log(value);

}
increment();
increment();
increment(10);
increment();
//output: 1 2 10 3
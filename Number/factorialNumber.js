function isFactorial(num){
    if(num<0){
        return "factorial is not define for negative number";
    }
   let result=1;
   for(let i=1;i<=num;i++){
    result*=i; //multiply each number from 1 to num
   }
   return result;
}

console.log(isFactorial(10)); //3628800
console.log(isFactorial(1)); //1
console.log(isFactorial(-5)); //factorial is not define for negative number;
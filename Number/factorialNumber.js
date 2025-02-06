function isFactorial(num){
    if(num<=0){
        return false;
    }
   let result=1;
   for(let i=1;i<=num;i++){
    result*=i; //multiply each number from 1 to num
   }
   return result;
}
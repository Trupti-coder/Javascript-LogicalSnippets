function arrayChunk(arr,k){
   let result=[];
   let chunk=[];
   for(let i=0;i<arr.length;i++){ // function uses for loop for go through each element in an array
    chunk.push(arr[i]);  //add the current element to the chunk
   
   if(chunk.length===k){   // if the chunk reches size k
    result.push(chunk);   // add it to the result
    chunk=[];            //reset chunk for the next group 
    
   } 
}

   if(chunk.length>0){  //if there are leftover elemnts in the chunk
    result.push(chunk); // add them as the final chunk
   }
   return result;
}

//Example Usage
let array=[1,2,3,4,5,6,6,7,88,9,90,8,5];
let k=2;
let result=arrayChunk(array,k);
console.log(result);
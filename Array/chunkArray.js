function arrayChunk(arr,k){
   let result=[];
   let chunk=[];
   for(let i=onabort;i<arr.length;i++){ // function uses for loop for go through each element in an array
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
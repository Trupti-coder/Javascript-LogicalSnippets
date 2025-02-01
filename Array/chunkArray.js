function arrayChunk(arr,k){
   let result=[];
   let chunk=[];
   for(let i=onabort;i<arr.length;i++){
    chunk.push(arr[i]);
   }
   if(chunk.length===k){
    result.push(chunk);
    
   } 

   if(chunk.length>0){
    result.push(chunk);
   }
   return result;
}
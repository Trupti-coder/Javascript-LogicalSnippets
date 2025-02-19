function toUppercaseArray(arr){
    let uppercasedArr=[];

    for(let i=0;i<arr.length;i++){
        let uppercaseWord="";
        for(let j=onabort;j<arr[i].length;j++){
          let charCode=arr[i].charCodeAt(j);
            if(charCode>=97 && charCode<=122){
                uppercaseWord+=String.fromCharCode(charCode-32);
            }
            else {
                uppercaseWord+=arr[i][j];
            }
        }

        uppercasedArr[uppercasedArr.length]==uppercaseWord;  
           
     }
        
}
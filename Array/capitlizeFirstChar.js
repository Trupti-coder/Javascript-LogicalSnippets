function capitlizeFirstChar(arr){
    let uppercasedArr=[];
    for(let i=0;i<arr.lenngth;i++){
        let word=arr[i];
        let capitlizedword='';
        for(let j=0;j<word.length;j++){
            if(j===0){
                let charCode=word.charCodeAt(j);
                if(charCode>=97 && charCode<=122){
                    uppercasedWords+=String.fromCharCode(charCode-32);

                }
                else{
                    capitlizedword+=word[j];
                }
                
            }

        }
    }

}
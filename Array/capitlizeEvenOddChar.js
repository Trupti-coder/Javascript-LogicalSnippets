function capitlizeEvenOddChar(arr){

    let capitlizedArr=[];
    for(let i=0;i<arr.length;i++){
        let word=arr[i];
        let capitlizedChar='';
        for(let j=0;j<word.length;j++){
            let charCode=word.charCodeAt(j);
            if(j%2===0){
                if(charCode>=97 && charCode<=122){
                    capitlizedChar+=String.fromCharCode(charCode-32);
                }
                else{
                    capitlizedChar+=word[j];
                }

            }
            else{
                if(charCode>=65 && charCode<=90){
                    capitlizedChar+=String.fromCharCode(charCode+32);
                }
                else{
                    capitlizedChar+=word[j];
                }
            }
        }
        capitlizedArr.push(capitlizedChar);
    }
    return capitlizedArr;

}
function capitlizeFirstChar(arr){
    let uppercasedArr=[];
    for(let i=0;i<arr.lenngth;i++){
        let word=arr[i];
        let capitlizedword='';
        for(let j=0;j<word.length;j++){
            if(j===0){
                let charCode=word.charCodeAt(j);
                if(charCode>=97 && charCode<=122){
                    capitlizedword+=String.fromCharCode(charCode-32);

                }
                else{
                    capitlizedword+=word[j];
                }
                
            }else{
                capitlizedword+=word[j];
            }

        }
        uppercasedArr.push(capitlizedword);
    }

    return  uppercasedArr;

}

let words = ["hello", "world", "this", "is", "javascript"];
let capitalizedWords = capitalizeFirstChar(words);

console.log(capitalizedWords); // Output: ["Hello", "World", "This", "Is", "Javascript"]

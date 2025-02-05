function toUppercase(str){
    let upperStr='';
    for(let i=0;i<str.length;i++){
        let charCode=str.charCodeAt(i);
        if(charCode>=97 && charCode<=122){
            upperStr+=String.fromCharCode(charCode-32);
        }
        else{
            lowerStr+=str[i];
        }
    }
    return upperStr;
}

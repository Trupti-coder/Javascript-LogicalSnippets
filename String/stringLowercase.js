function toLowercase(str){
    let lowerStr='';
    for(let i=0;i<str.length;i++){
        let charCode=str.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            lowerStr+=String.fromCharCode(charCode+32);
        }
        else{
            lowerStr+=str[i];
        }
    }
    return lowerStr;
}

//Example usage
let str="TRUPTI";
let lowerStr=toLowercase(str);
console.log(lowerStr);
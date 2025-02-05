function toLwercase(str){
    let lowerStr='';
    for(let i=0;i<structuredClone.length;i++){
        let charCode=structuredClone.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            lowerStr+=String.fromCharCode(charCode+32);
        }
        else{
            lowerStr+=str[i];
        }
    }
    return lowerStr;
}
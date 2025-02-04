function alternateString(s1,s2){
    let result='';
    let maxLength=s1.length>s2.length?s1.length:s2.length;

    //loop through both strings up to the length of the longer string
    for(let i=0;i<maxLength;i++){
        if(i<s1.length){
            let code1=s1.charCodeAt(i);
            result+=String.fromCharCode(code1);
        }
        if(i<s2.length){
            let code2=s2.charCodeAt(i);
            result+=String.fromCharCode(code2);
        }
    }
    return result;
}
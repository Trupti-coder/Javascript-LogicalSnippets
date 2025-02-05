function hasUniqueChar(str){
    let seenChars={};
    for(let i=0;i<str.length;i++){
        let char=str[i];

        if(seenChars[char]){
            return false;
        }
        seenChars[char]=true;
    }
    return true;
}
console.log(hasUniqueChar("hello")); //false
console.log(hasUniqueChar("car")); //true
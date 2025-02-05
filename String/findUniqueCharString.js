function hasUniqueChar(){
    let seenChars={};
    for(let i=0;i<str.length;i++){
        let char=str[i];

        if(seenChars[char]){
            return false;
        }
        seenChars[char]=true;
    }
}
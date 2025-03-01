function firstNonRepeatingChar(str){
    let frequency={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char]=1
        }
    }

    for(let i=0;i<str.length;i++){
        
    }
}
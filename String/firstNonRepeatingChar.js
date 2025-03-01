function firstNonRepeatingChar(str){
    let frequency={};            // Object to store frequency of characters
    
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
        if(frequency[str[i]]===1){
            return str[i];
        }
    }
    return null;
}

const input = "leetcode";
const output = firstNonRepeatingChar(input);
console.log(output); // Output: 'l'
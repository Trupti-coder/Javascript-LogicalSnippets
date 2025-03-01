function groupAnagrams(words){

    function sortedWord(word){
        let chars=word.split('');
        for(let i=0;i<chars.length;i++){
            for(let j=0;j<chars.length-1-i;j++){
                if(chars[j]>chars[j+1]){
                    let temp=chars[j];
                    chars[j]=chars[j+1];
                    chars[j+1]=temp;
                }

            }
        }

        return chars.join('');

    }

    const anagrams={};
    const result=[];

    for(let i=0;i<words.length;i++){
        const word=words[i];
        const sorted=sortedWord(word);

        if(!anagrams[sorted]){
            anagrams[sorted]=[];
        }
        anagrams[sorted].push(word);
    }

    for(let key in anagrams){
        if(anagrams.hasOwnProperty(key)){
            result.push(anagrams[key]);
        }
    }

    return result;

}

// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);
console.log(output); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
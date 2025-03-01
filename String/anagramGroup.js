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


}
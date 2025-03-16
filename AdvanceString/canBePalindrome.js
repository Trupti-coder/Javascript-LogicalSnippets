function canBePalindrome(word){

    let freq={}
    for(let i=0;i<word.length;i++){
        let char=word[i];
        freq[char]=(freq[char] || 0)+1;
    }

    let oddCount=0;

}
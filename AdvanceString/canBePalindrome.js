function canBePalindrome(word){

    let freq={}
    for(let i=0;i<word.length;i++){
        let char=word[i];
        freq[char]=(freq[char] || 0)+1;
    }

    let oddCount=0;
    for(let key in freq){
        if(freq[key%2!==0]){
            oddCount++;
        }
    }

    return oddCount<=1;

}

//Example Usage
console.log("Palindrome Anagram Chain:", longestPalindromeChain(["civic", "ivicc", "hello", "level", "racecar"]));
 // Output: 4

 
function findLongestWord(sentence){

    let words = [];
    let word = '';
    let longestWord = '';

    // Split the sentence into words
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === ' ' || i === sentence.length - 1){
            if (i === sentence.length - 1 && sentence[i] !== ' '){
                word += sentence[i];
            }
            words.push(word);
            word = '';

        }
        else{
            word+=sentence[i];
        }
    }
            // Find the longest word
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length) {
            longestWord = words[i];

    }
}
return longestWord;

}

// Example usage
let sentence = "This is a sample sentence with some reallylongwordinit.";
console.log(findLongestWord(sentence)); // Outputs: "reallylongwordinit"



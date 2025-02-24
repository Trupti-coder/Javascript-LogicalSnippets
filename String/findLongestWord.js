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

}
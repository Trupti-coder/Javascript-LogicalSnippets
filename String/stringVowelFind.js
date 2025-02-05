function findVowel(str){
    var vowel=["a","e","i","o","u","A","E","I","O","U"];
   let foundVowel="";
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowel.length;j++){
            if(str[i]===vowel[j]){
                foundVowel+=str[i];
                break;

            }
        }
    }
    return foundVowel;
}
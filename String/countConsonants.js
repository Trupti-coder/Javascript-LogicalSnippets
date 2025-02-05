function countConsonants(){
    let countConsonants=0;
    let vowels='aeiouAEIOU';

    for(let i=0;i<str.length;i++){
        let char=str[i];

        if((char>="a" && char<="z")|| (char>="A" && char<="Z")){
            let isVowel=false;
        for(let j=0;j<vowels.length;j++){
            if(char===vowels[j]){
                isVowel=true;
                break;
            }
        }
        if(!isVowel){
            countConsonants++;
        }

    }
}
return countConsonants;
}
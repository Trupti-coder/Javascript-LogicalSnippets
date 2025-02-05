function compaireString(str1,str2){
    let len1=str1.length;
    let len2=str2.length;

    if(len1===len2){
        return "Equal"
    }
    else if(len1<len2){
        return `${str1} is shorter thar ${str2}`

    }
    else{
        return `${str1} is grater than ${str2}`

    }
}
console.log(compaireString("ab","abcc"));
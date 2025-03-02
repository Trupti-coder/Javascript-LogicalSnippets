function isIsomorphic(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }

    const mapStr1={};
    const mapStr2={};

    for(let i=0;i<str1.length;i++){
        const charStr1=str[i];
        const charStr2=str2[i];

        if(!mapStr1[charStr1]) mapStr1[charStr1]=charStr2;
        if(!mapStr2[charStr2]) mapStr2[charStr2]=charStr1;
    }
}
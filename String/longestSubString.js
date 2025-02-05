function longestSubstringWithoutRepeating(s){
    let maxLength=0;
    let start=0;
    let seen={};

    for(let end=0;end<s.length;end++){
        let char=s[end];

        if(seen[char]!==undefined && seen[char]>=start){
            start=seen[char]+1;
        }
        seen[char]=end;
        maxLength=Math.max(maxLength,end-start+1);
    }
    return maxLength;
}
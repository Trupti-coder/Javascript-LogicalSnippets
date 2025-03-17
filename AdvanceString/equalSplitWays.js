function equalSplitWays(str){
    let n=str.length;
    if(n%2!==0)return 0;
    let mid=n/2;
    let freq1={},freq2={};
    for(let i=0;i<mid;i++){

        freq1[str[i]] = (freq1[str[i]] || 0) + 1;
        freq2[str[mid + i]] = (freq2[str[mid + i]] || 0) + 1;

    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) return 0;
    }

    return 1;

}

//Example usage

console.log("Equal Split Ways:", equalSplitWays("aabb"));

// Output: 1
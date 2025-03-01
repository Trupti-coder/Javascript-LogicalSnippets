function longestPalindromicSubString(str){

    let n=str.length;
    let maxLength=1;
    let start=0;

    let table=Array(n).fill(0).map(()=>Array(n).fill(false));

    for(let i=0;i<n;i++){
        table[i][i]=true;
    }

}
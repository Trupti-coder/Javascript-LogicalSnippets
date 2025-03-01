function longestPalindromicSubString(str){

    let n=str.length;
    let maxLength=1;
    let start=0;

    let table=Array(n).fill(0).map(()=>Array(n).fill(false));

    for(let i=0;i<n;i++){
        table[i][i]=true;
    }

    for(let i=0;i<n-1;i++){
        if(str[i]===str[i+1]){
            table[i][i+1]=true;
            start=i;
            maxLength=2;
        }
    }

    for(let k=3;k<=n;k++){
        for(let i=0;i<n-j+1;i++){
            let j=i+k-1;

            if(table[i+1[j-1]&& str[i]===str[j]]){
                table[i][j]=true;

                if(k>maxLength){
                    start=i;
                    maxLength=k;
                }
            }
        }
    }

  return str.substring(start, start + maxLength);
}


const input = "babad";
const output = longestPalindromicSubstring(input);
console.log(output); // Output: "bab" or "aba"
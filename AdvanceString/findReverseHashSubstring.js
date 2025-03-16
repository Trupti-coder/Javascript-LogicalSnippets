function findReversedHashSubstring(str){
    let n=str.length;
    for(let len=1;len<=n;len++){
        for(let i=0;i+len<=n;i++){
            let reversed="";

            for(let j=Sub.length-1;j>=0;j--){
                reversed+=sub[j];

            }

            for(let k=0;k+len<=n;k++){

                if (k !== i && str.substring(k, k + len) === reversed){
                    return sub;
                }

            }

        }
    }

    return "";
}
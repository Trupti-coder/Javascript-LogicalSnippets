function permute(str){
    let result=[];

    function generatePermutation(current,remaining){
        if(remaining.length===0){
            result.push(current);
        }
        else{
            for(let i=0;i<remaining.length;i++){
                let next=current+remaining[i];
                let rest=remaining.slice(0,i)+remaining.slice(i+1);
                generatePermutation(next,rest);
            }
        }

    }
    generatePermutation("",str);
    return result;
}

const input = "abc";
const output = permute(input);
console.log(output); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
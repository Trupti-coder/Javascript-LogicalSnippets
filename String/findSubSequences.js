function findAllSubSequences(str){
    let result=[];

    function generateSubSequences(current,index){
        if(index===str.length){
            if(current!==""){
                result.push(current);
            }
            return;
        }
         generateSubSequences(current+str[index],index+1);
         generateSubSequences(current,index+1);
    }
    generateSubSequences("",0);
    return result;
}

const input = "abc";
const output = findSubsequences(input);
console.log(output); // Output: ["a", "b", "c", "ab", "ac", "bc", "abc"]
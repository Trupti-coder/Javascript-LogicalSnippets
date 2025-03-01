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
}
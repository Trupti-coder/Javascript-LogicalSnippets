let obj={a:1,b:2,c:3};
function hasKey(obj,key){
    for(let k in obj){
        if(k===key){
            return true;
        }
    }
    return false;
}
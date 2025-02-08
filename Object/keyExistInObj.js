let obj={a:1,b:2,c:3};
function hasKey(obj,key){
    for(let k in obj){
        if(k===key){
            return true;
        }
    }
    return false;
}
console.log(hasKey(obj,"c")); //true;
console.log(hasKey(obj,"d"));//false 


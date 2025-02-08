let obj={a:1,b:2,c:3,d:4};
function getKey(obj){
    let keys=[];

    for(let key in obj){
        keys.push(key);
    }
    return keys;

}
console.log(getKey(obj));
let obj={a:1,b:2,c:3}
let clone={}
for(let key in obj){
    clone[key]=obj[key];
}
console.log(clone);
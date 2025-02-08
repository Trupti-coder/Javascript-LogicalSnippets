let obj1={a:1,b:2};
let obj2={c:1,d:2};

let merged={};
for(let key in obj1){
    merged[key]=obj1[key];
}
for(let key in obj2){
    merged[key]=obj2[key];
}
console.log(merged);
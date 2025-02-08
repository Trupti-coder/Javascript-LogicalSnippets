function stringify(obj){
    let result='{';
    for(let key in obj){
        let value = typeof obj[key] === 'string' ? `"${obj[key]}"` : obj[key];
        result += `"${key}":${value},`;

    }
}
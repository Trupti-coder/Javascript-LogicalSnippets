function stringify(obj){
    let result='{';
    for(let key in obj){
        let value = typeof obj[key] === 'string' ? `"${obj[key]}"` : obj[key];
        result += `"${key}":${value},`;

    }
    result = result.slice(0, -1); // Remove trailing comma
    result += '}';
    return result;
}

// Example
let obj = { name: "Alice", age: 25 };
console.log(stringify(obj)); // {"name":"Alice","age":25}
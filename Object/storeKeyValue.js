function extractKeysAndValues(obj){
    let keys = [];
    let values = [];

    for (let key in obj) {
        keys[keys.length] = key;        // Add key to keys array
        values[values.length] = obj[key]; // Add value to values array
    }

    return [keys, values]; // Return both arrays as a pair
    
}

// Example Usage
let exampleObject = {
    name: "John",
    age: 30,
    country: "USA"
};

let result = extractKeysAndValues(exampleObject);
console.log("Keys:", result[0]);   // Output: ["name", "age", "country"]
console.log("Values:", result[1]); // Output: ["John", 30, "USA"]
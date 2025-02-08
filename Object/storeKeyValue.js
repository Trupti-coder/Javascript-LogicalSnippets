function extractKeysAndValues(obj){
    let keys = [];
    let values = [];

    for (let key in obj) {
        keys[keys.length] = key;        // Add key to keys array
        values[values.length] = obj[key]; // Add value to values array
    }

    return [keys, values]; // Return both arrays as a pair
    
}
function allUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false; // Duplicate found
            }
        }
    }
    return true; // No duplicates
}

console.log(allUnique([1, 2, 3, 4])); // true
console.log(allUnique([1, 2, 3, 2])); // false


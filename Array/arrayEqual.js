function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Different lengths, not equal
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // Elements at the same index are different
        }
    }

    return true; // All elements are equal
}

const array1 = [11, 22, 33];
const array2 = [11, 22, 33];

console.log(arraysAreEqual(array1, array2)); // true
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
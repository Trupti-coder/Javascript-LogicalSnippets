function findUniqueElement(arr){
    let xor=0;
    for(let i=0;i<arr.length;i++){
        xor ^= arr[i];
    }

      // Find the rightmost set bit (bit that is different between the two unique elements)
      let setBit = 1;
      while ((xor & setBit) === 0) {
          setBit <<= 1;
      }

      let num1 = 0, num2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] & setBit) {
            num1 ^= arr[i];
        } else {
            num2 ^= arr[i];
        }
    }

    return [num1, num2];
}

// Example usage:
let inputArray = [4, 1, 2, 1, 2, 3];
let result = findUniqueElements(inputArray);
console.log(result); // Output: [3, 4]
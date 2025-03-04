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
}
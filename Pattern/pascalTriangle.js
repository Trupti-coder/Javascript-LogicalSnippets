function pascalTriangle(n){
      // Initialize the triangle as an empty array
      let triangle = [];

      for (let i = 0; i < n; i++) {
        // Create a new row
        let row = [];

        for (let j = 0; j <= i; j++) {
            // The first and last elements of each row are always 1
            if (j === 0 || j === i) {
                row[j] = 1;
            } else {
                // Each triangle element is the sum of the two elements directly above it
                row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
      }

}
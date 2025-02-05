function isRotation(s1,s2){
     // Check if lengths are the same; if not, s2 can't be a rotation of s1
     if (s1.length !== s2.length) {
        return false;
    }

    // Concatenate s1 with itself
    let concatenated = '';
    for (let i = 0; i < s1.length; i++) {
        concatenated += s1[i]; // Build concatenated string
    }
    for (let i = 0; i < s1.length; i++) {
        concatenated += s1[i]; // Add s1 again to itself
    }


     // Check if s2 is a substring of concatenated
     for (let i = 0; i <= concatenated.length - s2.length; i++) {
        let match = true;
        for (let j = 0; j < s2.length; j++) {
            if (concatenated[i + j] !== s2[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true; // Found s2 as a substring
        }
    }

    return false; // s2 is not a rotation of s1

}
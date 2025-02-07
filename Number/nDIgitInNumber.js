function findNthDigit(num, n) {
    let digits = [];
    while (num > 0) {
        digits.unshift(num % 10); // Push digits into an array
        num = (num - (num % 10)) / 10;
    }
    if (n > digits.length || n <= 0) return -1; // Handle invalid n
    return digits[n - 1];
}
console.log(findNthDigit(12345,3));
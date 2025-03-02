function swapNumber(a,b){
    a=a+b;
    b=a-b;
    a=a-b;

    return[a,b];

}

// Example usage:
let [a, b] = swapNumbers(5, 8);
console.log("a =", a); // Output: a = 8
console.log("b =", b); // Output: b = 5
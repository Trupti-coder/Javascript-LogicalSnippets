function isPalindrome(str){
    let start=0;
    let end=str.length-1;

    while(start<end){
        if(str[start]!==str[end]){
            return false;
            
        }
        start++;
        end--;
    }
    return true;

}

//Example usage
let str1="racecar";
let str2="car";
console.log(isPalindrome(str1)); //true
console.log(isPalindrome(str2));// false
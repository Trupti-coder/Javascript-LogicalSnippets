function findSmallestPalindrome(N){
    if(N===1){
        return 1;
    }

    let num=Math.pow(10,N-1);
    while(!isPalindrome(num)){
        num++;
    }
    return num;
}

function findLargestPalindrome(N){
    let num=Math.pow(10,N)-1;
    while(!isPalindrome(num)){
        num--;
    }
    return num;
}

function isPalindrome(){
    let str=num.toString();
    let len=str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return false;
        }
    }
    return true;
}

let N = 3;
console.log("Smallest:", findSmallestPalindrome(N)); // Smallest: 101
console.log("Largest:", findLargestPalindrome(N)); // Largest: 999
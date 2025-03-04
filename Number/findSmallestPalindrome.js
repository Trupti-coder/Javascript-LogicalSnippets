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
    
}
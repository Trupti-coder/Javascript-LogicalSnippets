function evenNumber(num){
    if(num===0){
        return false;
    }

    while(num>0){
        if(num%2===0){
            console.log(`Given number is even number`)
        }

        else{
            console.log("not even number")
        }
    }
}
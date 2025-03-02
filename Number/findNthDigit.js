function findNthDigit(number,position){
    let numStr=number.toString();
    let digit=null;
    let count=0;

    for(let i=0;i<numStr.length;i++){
        count++;

        if(count===position){
            digit=numStr[i];
            break;
        }
    }
}
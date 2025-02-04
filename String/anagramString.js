function areAnagrams(str1,str2){
    if(str1.length !==str2.length){
        return false;
    }
    function sortString(){
        let arr=str1.split('');
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        return arr.join('');
    }

    let sortedStr1=sortString(str1);
    let sortedStr2=sortString(str2);
    return sortedStr1===sortedStr2;

}
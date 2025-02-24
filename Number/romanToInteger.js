function romanToInteger(roman){
    const romanToIntMap={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    let integer=0;
    let previousValue=0;

    for(let i=roman.length-1;i>=0;i--){
        const currentValue=romanToIntegerMap[roman[i]];

        if(currentValue<previousValue){
            
        }
    }
    
}
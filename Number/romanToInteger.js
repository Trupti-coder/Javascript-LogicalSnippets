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
            integer-=currentValue;
        }
        else{
            integer+=currentValue;
        }
        previousValue=currentValue;
    }
    return integer;
    
}
// Example usage
console.log(romanToInt('IX')); // Outputs: 9
console.log(romanToInt('LVIII')); // Outputs: 58
console.log(romanToInt('MCMXCIV')); // Outputs: 1994
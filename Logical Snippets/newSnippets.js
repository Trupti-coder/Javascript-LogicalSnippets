function checkAge(data){
    if(data==={  age : 18 }){
        console.log('You are an adult..!')
    }
    else if(data=={age:18}){
        console.log("you are still an adult")
    }
    else{
        console.log('Hmm...you dont have an age i guess')
    }
}

checkAge({age:18});
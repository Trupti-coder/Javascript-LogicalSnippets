let myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=true;
        if(success){
            resolve("operation was successful");

        }
        else{
            reject("operation failed..");
        }
    },2000);
})
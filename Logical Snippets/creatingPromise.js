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

// Use the promise
myPromise.then((message) => {
    console.log(message); // Handle the resolved case
  }).catch((error) => {
    console.error(error); // Handle the rejected case
  });
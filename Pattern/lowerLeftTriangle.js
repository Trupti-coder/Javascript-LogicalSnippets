function lowerLeft(n){
    for(let i=n;i>=1;i--){

        let str=" * ";
        console.log(str.repeat(i));
    }
}

lowerLeft(7);

// output:

/*


 *  *  *  *  *  *  * 
 *  *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  * 
 *  *  * 
 *  * 
 *                                                       */
function topKFrequent(nums,k){
    const frequencyMap={};
    for(let i=0;i<nums.length;i++){
        if(frequencyMap[nums[i]]!==undefined){
            frequencyMap[nums[i]]++;
        }else{
            frequencyMap[nums[i]]=1;
        }
    }

    // Step 2: Create an array of buckets where the index represents the frequency
    const buckets=[];
    for(let key in frequencyMap){
        const freq=frequencyMap[key];
        if(buckets[freq]===undefined){
            buckets[freq]=[];
        }
        buckets[freq].push(Number(key));
    }

    // Step 3: Collect the top k frequent elements from the buckets
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i] !== undefined) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);


}
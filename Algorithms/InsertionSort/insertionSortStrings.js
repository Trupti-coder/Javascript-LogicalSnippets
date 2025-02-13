function insertionSortStrings(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++){

        let current = arr[i].toLowerCase();
        let original = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j].toLowerCase() > current) {
            arr[j + 1] = arr[j];
            j--;

    }
}

}
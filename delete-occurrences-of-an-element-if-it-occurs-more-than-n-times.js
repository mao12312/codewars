const deleteNth = (arr, n) => {
    let countMap = new Map();
    for (i = 0; i < arr.length; i++) {
        count = arr.filter(e => { return e === arr[i] }).length;
        countMap.set(arr[i],count);
    }
    console.log(countMap);
}
deleteNth([20, 37, 20, 21], 1)
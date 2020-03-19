const arrCount = (arr) => {
    let countMap = new Map();
    for (i = 0; i < arr.length; i++) {
        count = arr.filter(e => { return e === arr[i] }).length;
        countMap.set(arr[i], count);
    }
    // fo array
    // return Array.from(countMap)
    return countMap;
}
arrCount([20, 37, 20, 21]);
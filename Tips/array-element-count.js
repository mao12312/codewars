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

const arrCount = (arr) => {
    let seen = {};
    // 文字列の場合チルダ一つで、-1になり、もう一つで、0になる(二重ビット否定)
    arr.filter((num) => (seen[num] = ~~seen[num] + 1));
    console.log(seen);
    // { '20': 2, '21': 1, '37': 1 }
}

arrCount([20, 37, 20, 21]);
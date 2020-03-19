const deleteNth = (arr, n) => {
    let seen = {};
    return arr.filter((num) => (seen[num] = ~~seen[num] + 1) <= n);
}

const deleteNth = (arr, n) => {
    var seen = {};
    return arr.filter(function (i) {
        seen[i] = (seen[i] || 0) + 1;
        return seen[i] <= n;
    });
}
deleteNth([20, 37, 20, 21], 1)
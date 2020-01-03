function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

isIntArray([1, 2, 3, 4])
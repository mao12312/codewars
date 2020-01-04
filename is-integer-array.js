function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

function isIntArray(a) {
    if (!Array.isArray(a)) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== ~~a[i]) {
            return false;
        }
    }
    return true;
}

isIntArray([1, 2, 3, 4])
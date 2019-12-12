// MyAnsweer
function array_diff(a, b) {
    let res = a.filter(x => !b.includes(x));
    return res;
}

// beestAnswer use indexOf()
function array_diff(a, b) {
    return a.filter(function (x) { return b.indexOf(x) == -1; });
}
array_diff([12, 5, 0, 18, 1, 0, -20, -6, -16, -7], [0, 12, -7, -16, 0])
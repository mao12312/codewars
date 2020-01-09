const sum_pairs = (ints, s) => {
    let res = [];
    let total = 0;
    for (i = 0; i < ints.length; i++) {
        total = ints[i]
        for (j = 0; j < ints.length; j++) {
            if (total + ints[j] === s && i !== j) {
                res.push(ints[i], ints[j]);
            }
        }
    }
    return (res.length !== 0) ? res.slice(0, 2) : undefined;
}

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];
sum_pairs(l5, 10)

var sum_pairs = function (ints, s) {
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true
    }
}
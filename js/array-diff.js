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



// memo
const logical_expression = function (arr1, arr2) {
    // AND
    let intersection = arr1.filter(e => arr2.includes(e));
    console.log(intersection);
    // -> [ 2, 3 ]

    // A NOT B
    let differenceA = arr1.filter(e => !arr2.includes(e));
    console.log(differenceA);
    // ->[ 1 ]

    // B NOT A
    let differenceB = arr2.filter(e => !arr1.includes(e));
    console.log(differenceB);
    // ->[ 5 ]

    // NAND
    let symmetric = arr1
        .filter(e => !arr2.includes(e))
        .concat(arr2.filter(e => !arr1.includes(e)));
    console.log(symmetric);
    // ->[ 1, 5 ]
}
logical_expression([1, 2, 3], [2, 3, 5])

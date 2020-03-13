function two(e) {
    return e % 2 === 0
}
let arr = [1, 2, 3, 4, 5];
let res = arr.filter(two);
// [ 2, 4 ]

let res2 = arr.filter(e => { return e % 2 === 0 })
// [2, 4]
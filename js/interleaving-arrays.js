function interleave(...arrs) {
    const maxLength = Math.max(...arrs.map((arr) => arr.length));
    const res = [];

    for (let i = 0; i < maxLength; i++) {
        for (const arr of arrs) {
            result.push(i < arr.length ? arr[i] : null);
        }
    }
    return res;
}

// function interleave(...arr) {
//     let res = []
//     if (arr === []) {
//         return res;
//     } else {
//         for (i = 0; i < arr.length; i++) {
//             // console.log(arr[i])
//             for (j = 0; j < arr.length; j++) {
//                 // (arr[j][i] === undefined) ? res.push(null) : res.push(arr[j][i]);
//                 console.log(arr[j][i])
//             }
//         }
//         console.log(res)
//     }
// }
interleave([1, 2, 3], ["c", "d", "e"])
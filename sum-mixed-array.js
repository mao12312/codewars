// const sumMix = (x) => {
//     let res = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (typeof (x[i]) === "string") {
//             x.splice(i, 1, Number(x[i]))
//         }
//         res += x[i]
//     }
//     console.log(res)
// }

const sumMix = (x) => {
    let intX = x.map((e) => { return typeof (e) === "string" ? Number(e) : e })
    return intX.reduce((pre, cur) => { return pre + cur })
}
sumMix([9, 3, '7', '3'])
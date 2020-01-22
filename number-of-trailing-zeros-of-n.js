// const zeros = (n) => {
//     let num = 1;
//     let count = 0;
//     if (n === 0) { return 0 }
//     for (let i = 1; i <= n; i++) {
//         console.log(num *= i);
//     }
//     let res = String(num).split('')
//     for (let j = res.length - 1; j >= 0; j--) {
//         if(res[j]==="0"){
//             count++
//         }else{
//             console.log(count)
//             break
//         }
//     }
//     console.log(res)
//     console.log(num)
// }

const zeros = (n) => {
    let count = 0;
    let i = 5;
    while (n / i >= 1) {
        count += Math.floor(n / i);
        i *= 5;
    }
    return count
}
zeros(100)

//参考: https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/
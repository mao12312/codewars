const digitize = (n) => {
    let res = String(n).split('').reverse().map(num => { return Number(num) })
    return res
}
// other answer
const digitize = (n) => {
    let res = (n+"").split('').map(Number).reverse()
    return res
}
digitize(35231)
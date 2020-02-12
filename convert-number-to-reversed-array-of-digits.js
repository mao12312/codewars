const digitize = (n) => {
    let res = String(n).split('').reverse().map(num => { return Number(num) })
    return res
}
digitize(35231)
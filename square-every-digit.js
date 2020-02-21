const squareDigits = (num) => {
    let res = Number(String(num).split('').map(str => parseInt(str, 10)*str).join(''));
    return res
}
squareDigits(9119)
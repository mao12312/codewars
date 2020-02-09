const superSize = (num) => {
    let numSpt = String(num).split('').map(str => parseInt(str, 10));
    let res = parseInt(numSpt.sort((a, b) => b - a).join(''));
    return res;
}
superSize(2017)
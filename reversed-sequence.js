const reverseSeq = (n) => {
    let arr = [...Array(n).keys()].map(i => ++i);
    let rvsArr = arr.reverse();
    return rvsArr;
}

const aaa = n => {
    let res = []
    for (let i = n; i > 0; i--) {
        res.push(i)
    }
    return res;
}
reverseSeq(12)
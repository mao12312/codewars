const numPrimorial = (n) => {
    let prime = [];
    for (i = 2; prime.length < n; i++) {
        if (primeNumber(i)) {
            prime.push(i)
        }
    }
    let res = prime.reduce((prev, cur) => { return prev * cur });
    return res;
}
const primeNumber = (i) => {
    if (i === 2) return true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) return false;
    }
    return true;
}
numPrimorial(100)


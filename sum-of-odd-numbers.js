function rowSumOddNumbers(n) {
    let odd = [];
    let num = 0;
    for (i = 0; i <= n; i++) {
        num += i;
    }
    for (i = 0; odd.length < num; i++) {
        if (i % 2 === 1) {
            odd.push(i)
        }
    }
    let res = odd.slice(-n)
    sum = res.reduce((a, x) => a += x, 0);
    return sum;
}

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
rowSumOddNumbers(2)
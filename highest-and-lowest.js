function highAndLow(numbers) {
    a = numbers.split(" ").map(Number).sort((a, b) => a - b);
    res = `${String(a.slice(-1)[0])} ${String(a[0])}`
    console.log(res);
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
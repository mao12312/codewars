// My Answer
function highAndLow(numbers) {
    spt = numbers.split(" ").map(Number).sort((a, b) => a - b);
    res = `${String(spt.slice(-1)[0])} ${String(spt[0])}`
    console.log(res);
}

// best  Answer
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
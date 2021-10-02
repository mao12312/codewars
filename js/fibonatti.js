'use strict';
const fib = (n) => {
    if (n === 1) {
        return 1
    } else if (n === 0) {
        return 0
    }
    return fib(n - 1) + fib(n - 2)
}
let length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i))
}

// user Map
'use strict'
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
const fib = (n) => {
    if (memo.has(n)) {
        return memo.get(n)
    }
    const val = fib(n - 1) + fib(n - 2);
    memo.set(n, val);
    return val;
}
let length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i))
}
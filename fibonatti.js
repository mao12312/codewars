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
function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let i = 0
let n = 30

while (i < n + 1) {
    if (isPrime(i)) {
        console.log(i)
    }
    i++
} 
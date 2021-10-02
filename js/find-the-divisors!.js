const divisors = (n) => {
    let les = []
    for (i = 2; i < n; i++) {
        (n % i === 0) ? les.push(i) : "";
    }
    return (les.length === 0) ? `${n} is prime` : les
}
divisors(1);
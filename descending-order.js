function descendingOrder(n) {
    return Number(String(n).split('').sort().map(Number).sort(function(a,b){return b - a}).join(''));
}
descendingOrder(0)

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// My answer
function monkeyCount(n) {
    res =[];
    for(let i=1;i<=n;i++){
        res.push(i);
    }
    return res;
}
monkeyCount(0);

// bestAnswer1
function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
}

// bestAnswer2
function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));

    return arr;
}
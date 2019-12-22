function maps(x) {
    let res = x.map(e=>{return e*2});
    return res;
}

// best Answer
function maps(x) {
    return x.map(n => n * 2);
}

maps([1, 2, 3])
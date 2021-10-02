function comp(array1, array2) {
    if(!array1||!array2) return false;
    let ar2 = array2.map(e => { return Math.sqrt(e) });
    res = JSON.stringify(array1.sort()) === JSON.stringify(ar2.sort()) ? true : false
    return res;
}

array1 = [121, 144, 19, 161, 19, 144, 19, 11];
array2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
comp(array1, array2);
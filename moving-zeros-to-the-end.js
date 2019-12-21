var moveZeros = function (arr) {
    let res = arr.filter(function (e) {
        return (e !== 0)
    });
    let count = arr.filter(function (x) {return x === 0}).length;

    for(i=0; i<count; i++){
        res = res.concat([0]);
    }
    return res;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
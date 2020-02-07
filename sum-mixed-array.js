const sumMix = (x) => {
    let res, i = 0;
    for (i; i < x.length; i++) {
        console.log(typeof(x[i]))
        if (typeof(x[i]) === String) {
            Number(x[i]);
        }
        res+=x[i]
    }
    console.log(res)
}
sumMix([9, 3, '7', '3'])
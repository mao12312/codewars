const josephusSurvivor = (n, k) => {
    let arr = [...Array(n).keys()].map(i => ++i);
    let count = 0;
    let keep = true;
    while (keep) {
        for (let i = 0; i < arr.length; i++) {
            count++;
            if (count === k) {
                arr.splice(i, 1);
                count = 0;
                i--;
            }
        }
        if (arr.length === 1) {
            keep = false;
        }
    }
    return arr[0];
}
josephusSurvivor(7, 3)
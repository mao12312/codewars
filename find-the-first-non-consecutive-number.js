const firstNonConsecutive = (arr) => {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
            return arr[i + 1]
        }
    }
    return null;
}
firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])
const removeEveryOther = (arr) => {
    return arr.filter(function (e, index) { return index % 2 === 0 });
}
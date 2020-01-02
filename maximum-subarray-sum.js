var maxSequence = function (arr) {
    arr1 = []
    arr.filter(function (e, i) {
        if (e > 0) {
            arr1.push(i);
        }
    });
    for (i = 0; i < arr1.length; i++) {
        res = arr.slice(arr1[i], arr1[i+1] + 1)
        console.log(res)
    }


    console.log(arr1)

}


var maxSequence = function (arr) {
    var max = 0;
    var cur = 0;
    arr.forEach(function (i) {
        cur = Math.max(0, cur + i);
        max = Math.max(max, cur);
    });
    return max;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
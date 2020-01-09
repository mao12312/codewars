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
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
        console.log(i)
    }
    return ans;
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
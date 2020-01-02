function findLongest(str) {

    var spl = str.split(" ");
    var longest = 0

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}


// bestAnswer
const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

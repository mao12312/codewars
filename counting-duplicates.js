// Counting Duplicates
// My Answer
function duplicateCount(text) {
    text = text.toLowerCase();
    textSp = text.split("")
    let count = 0;
    let ex;
    let res = [];
    for (i = 0; i < textSp.length; i++) {
        ex = new RegExp(textSp[i], 'ig')

        if (text.match(ex).length > 1 && res.indexOf(textSp[i]) === -1) {
            res.push(textSp[i]);
            count++;
        }
    }
    return count;
}


// bestAnswer
function duplicateCount(text) {
    res = text.toLowerCase().split('').sort().join('').match(/([^])\1+/g)
    console.log(res);
    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

duplicateCount("aDebBcde")






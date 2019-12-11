// Counting Duplicates
function duplicateCount(text) {
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
    console.log(count);
    console.log(res);
}
duplicateCount("aabBcde")







function pigIt(str) {
    let strSpt = str.split(' ');
    let res = [];
    strSpt.forEach(e => {
        if (e === "!" || e === "?") {
            res.push(e);
        } else {
            let iniChar = e.substring(0, 1)
            newWord = e.slice(1) + iniChar + 'ay'
            res.push(newWord);
        }
    });
    return res.join(' ')
}
pigIt('O tempora o mores !')

// bestAnswer
function pigIt(str) {
    res = str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
    console.log(res);
}
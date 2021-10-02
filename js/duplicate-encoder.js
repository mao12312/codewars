// My Answer
function duplicateEncode(word) {
    word = word.toLowerCase();
    wordSpt = word.split('');
    let res = ""
    for (i = 0; i < wordSpt.length; i++) {
        if (word.indexOf(wordSpt[i]) === word.lastIndexOf(wordSpt[i])) {
            res += "(";
        } else {
            res += ")"
        }
    }
    return res;
}

// bestAnswer
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}


duplicateEncode("(( @")
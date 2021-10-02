const solution = (str, ending) => {
    let res = str.endsWith(ending);
    return res;
}

const solution = (str, ending) => {
    let reg = new RegExp(ending + '$', 'i');
    let res = reg.test(str);
    return res;
}
solution('abcde', 'cde')
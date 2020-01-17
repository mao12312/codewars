function vertMirror(str) {
    str = str.split('\n').map(function (e) { return e.split('').reverse().join('')}).reverse().join('\n');
    return str
}
function horMirror(str) {
    str = str.split('\n').reverse().join('\n');
    return str
}
function oper(fct, s) {
    return fct(s);
}
oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")
oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")
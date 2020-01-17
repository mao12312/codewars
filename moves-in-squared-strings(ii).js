function rot(str) {
    str = str.split('\n').map(function (e) { return e.split('').reverse().join('') }).reverse().join('\n');
    return str
}
function selfieAndRot(str) {
    let dots = str.split('\n').length
    let strFh = str.split('\n').map(function(e){ return e +=".".repeat(dots)});
    let strLh = str.split('\n').map(function (e) { return e.split('').reverse().join('') }).map(function (e) { return ".".repeat(dots)+e}).reverse();
    let result = strFh.concat(strLh).join('\n');
    return result
    
}
function oper(fct, s) {
    return fct(s);
}
oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL")
oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP")

function rot(s) {
    return s.split("").reverse().join("");
}

function selfieAndRot(s) {
    return (s = s.replace(/.+/g, t => t + t.replace(/./g, "."))) + "\n" + rot(s);
}

function oper(fn, s) {
    return fn(s);
}
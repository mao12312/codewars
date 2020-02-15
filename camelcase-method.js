const camelCase = (str) => {
    let res = str.split(" ").map(e => { return e.replace(/(^[a-z])/, (_, c) => c.toUpperCase()) }).join('');

    return res;
}
// My answer
String.prototype.camelCase = function () {
    let res = this.split(" ").map(e => { return e.charAt(0).toUpperCase() + e.slice(1); }).join('');
    return res;
}
camelCase("test case")
// let res = str.split(" ").map(e => { return e.match(/(^[a-z])/) })
// NG
// let res = str.split(" ").map(e => { return e.replace(/(^[a-z])/, '$&'.toUpperCase()) })


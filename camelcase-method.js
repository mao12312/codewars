const camelCase = (str) => {
    let res = str.split(" ").map(e => { return e.charAt(0).toUpperCase() + e.slice(1); }).join('');
    return res;
}
// My answer
String.prototype.camelCase = function () {
    let res = this.split(" ").map(e => { return e.charAt(0).toUpperCase() + e.slice(1); }).join('');
    return res;
}
camelCase("test case")
// let res = str.split(" ").map(e => { return e.match(/(^[a-z])/) })
// let res = str.split(" ").map(word => { return word.replace(/(^[a-z])/, '$&'.toUpperCase()) })

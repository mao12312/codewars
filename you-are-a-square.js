// You're a square!
// My answer
var isSquare = function (n) {
    let sq = Math.sqrt(n);
    if (Number.isInteger(sq)) {
        res = `true, "${n} is a square number(${sq} * ${sq})"`;
        return res;

    } else if (Math.sign(n) === -1) {
        res = `false, "${n}: Negative numbers cannot be square numbers"`;
        return res;
    } else {
        res = `false, "${n} is not a square number"`;
        return res;
    }
}
// best answer
// var isSquare = function (n) {
//     console.log(Math.sqrt(n) % 1 === 0);
// }
isSquare(-1);
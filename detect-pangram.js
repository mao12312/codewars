const isPangram = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvxyz";
    let res = string.toLowerCase().split('').map(e => { return alphabet = alphabet.replace(e, "") }).pop()
    return res.length === 0 ? true : false;
}
isPangram("The quick barown fox jumps over the lazy dog.")

// function isPangram(string) {
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//         return string.indexOf(x) !== -1;
//     });
// }
// Stop gninnipS My sdroW!
// My answer
function spinWords(n) {
    let sptStr = n.split(' ');
    for (let i = 0; i < sptStr.length; i++) {
        if (sptStr[i].length >= 5) {
            sptStr[i] = sptStr[i].split('').reverse().join('');
        }
    }
    let res = sptStr.join(' ');
    return res;
}

// bestAnswer
// function spinWords(words) {
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }
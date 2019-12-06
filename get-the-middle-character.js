// Get the Middle Character
function getMiddle(s) {
    if (s.length % 2 === 1) {
        let quotient = Math.floor(s.length / 2);
        res = s.substr(quotient, 1);
        return res;
    } else {
        let quotient = Math.floor(s.length / 2);
        res = s.substr(quotient - 1, 2);
        return res;
    }
}
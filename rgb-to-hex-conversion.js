function rgb(r, g, b) {
    let rgbSpt = [r, g, b].map(function (e) {
        if (e < 0) {
            return 0
        } else if (e >= 255) {
            return 255
        } else {
            return e
        }
    });
    return rgbSpt.map(e => { return e.toString(16).padStart(2, "0") }).join('').toUpperCase();
}
// bestAnswer
function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
    if (d < 0) { return "00"; }
    if (d > 255) { return "FF"; }
    return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}
rgb(300, 255, 255)

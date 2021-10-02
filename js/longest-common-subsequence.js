function LCS(x, y) {
    x = x.split("");

    return y.split("").filter((item) => {
        if (x.indexOf(item) !== -1) {
            return x.splice(0, x.indexOf(item) + 1);
        }
    }).join("");
}
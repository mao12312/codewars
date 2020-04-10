String.prototype.toAlternatingCase = function () {
    let les = "";

    for (i = 0; i < this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            les += this[i].toUpperCase();
        } else {
            les += this[i].toLowerCase();
        }
    }
    return alternatedCase;
}
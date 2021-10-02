// My Answer
function isValidWalk(walk) {
    let n = [];
    let s = [];
    let w = [];
    let e = [];
    walk.forEach(function (dir) {
        if (dir === "n") {
            n.push(dir);
        } else if (dir === "s") {
            s.push(dir);
        } else if (dir === "w") {
            w.push(dir);
        } else if (dir === "e") {
            e.push(dir);
        }
    });
    let time = n.length + s.length + w.length + e.length;
    if (n.length === s.length && w.length === e.length && time === 11) {
        return true;
    } else {
        return false;
    }
}


// BestAnswer
function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}


isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
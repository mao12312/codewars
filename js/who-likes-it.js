// Who likes it?
// My  answer
function likes(names) {
    if (names.length === 1) {
        res = ` ${names[0]} likes this`
        return res;
    } else if (names.length === 2) {
        res = ` ${names[0]} and ${names[1]} like this`
        return res;
    } else if (names.length === 3) {
        res = ` ${names[0]}, ${names[1]} and ${names[2]} like this`
        return res;
    } else if (names.length >= 4) {
        let otherNum = names.length - 2;
        res = ` ${names[0]}, ${names[1]} and ${otherNum} others like this`
        return res;
    } else {
        res = "no one likes this";
        return res;
    }
}

// // best answer (switch)
// function likes(names) {
//     names = names || [];
//     switch (names.length) {
//         case 0: return 'no one likes this'; break;
//         case 1: return names[0] + ' likes this'; break;
//         case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }
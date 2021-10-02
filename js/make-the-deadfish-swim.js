const parse = (data) => {
    let num = 0;
    let res = [];
    let dataSpt = data.split('');
    for (let i = 0; i < dataSpt.length; i++) {
        if (dataSpt[i] === "i") {
            num++;
        } else if (dataSpt[i] === "d") {
            num--;
        } else if (dataSpt[i] === "s") {
            num *= num;
        } else if (dataSpt[i] === "o") {
            res.push(num)
        }

    }
    return res;
}
parse("iiisxxxdoso")
// function parse(data) {
//     let res = [];

//     data.split('').reduce((cur, s) => {
//         if (s === 'i') cur++;
//         if (s === 'd') cur--;
//         if (s === 's') cur = Math.pow(cur, 2);
//         if (s === 'o') res.push(cur);

//         return cur;
//     }, 0);

//     return res;
// }
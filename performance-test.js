const { performance } = require('perf_hooks');
// Function to measure
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
// end
var start = performance.now();
parse("iiisxxxdoso");
console.log(performance.now() - start);
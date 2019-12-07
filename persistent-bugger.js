function persistence(num) {
    let count = 0;
    while(String(num).length !== 1){
        num = String(num).split("").reduce((a, b) => a * b);
        count++;
    }
    console.log(count);
}
persistence(4)


// other answer
// function persistence(num) {
//     for (var i = 0; num > 9; i++) {
//         num = num.toString().split('').reduce((t, c) => c * t);
//     }
//     return i;
// }
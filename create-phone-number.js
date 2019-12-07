function createPhoneNumber(numbers) {
    let sptStr = numbers.join('');
    let res = `(${sptStr.slice(0, 3)}) ${sptStr.slice(3, 6)}-${sptStr.slice(6, 10)}`;
    console.log(res);

}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// // bestAnswer 1(use format)
// function createPhoneNumber(numbers) {
//     var format = "(xxx) xxx-xxxx";
//     for (var i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i]);
//     }
//     return format;
// }

// // bestAnser 2(use substring)
// function createPhoneNumber(numbers) {
//     numbers = numbers.join('');
//     return '(' + numbers.substring(0, 3) + ') '
//         + numbers.substring(3, 6)
//         + '-'
//         + numbers.substring(6);
// }
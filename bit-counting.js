// Bit Counting
var countBits = function (n) {
    let toBinary = n.toString(2);
    let strSerch ='1';
    let count  = 0;
    for (let i = 0; i < toBinary.length; i++){
        if(toBinary[i]===strSerch){
            count++;
        }
    }
    return count;
};

// bestAnswer
// var countBits =function(n){
//    res = n.toString(2).split('0').join('').length;
//    console.log(res)
// }
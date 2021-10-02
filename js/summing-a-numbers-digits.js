function sumDigits(number) {
    return String(Math.abs(number)).split('').map(Number).reduce(function(pre,cur){
        return pre + cur;
    });
}
sumDigits(-32);
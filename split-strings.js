const solution = (str) => {
    if (str.length % 2 === 1) {
        str = str + "_"
    }else if(str.length === 0){
        return [];
    }
    let res = str.match(/.{2}/g);
    return res;
}
solution("abcde")
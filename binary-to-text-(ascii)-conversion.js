const binaryToString = (binary) => {
    if (binary === '') return '';
    let res = ''
    let binarySpt = binary.match(/.{8}/g);
    for (let i = 0; i < binarySpt.length; i++) {
        res += String.fromCharCode(parseInt(binarySpt[i], 2));
    }
    return res;
}
binaryToString('01001011010101000100100001011000010000100101100101000101')
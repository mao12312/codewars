// My Answer
function duplicateEncode(word) {
    let spt = word.split('');
    let res = spt.filter(x => spt.includes(x));
    console.log(res);
}

duplicateEncode("dinn")
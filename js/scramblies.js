function scramble(str1, str2) {
    let str2Spt = str2.split('').sort();
    for (i = 0; i < str2Spt.length; i++) {
        if (str1.match(str2Spt[i])) {
            str1 = str1.replace(str2Spt[i], " ");
            continue
        } else {
            return false;
        }
    }
    // return true;
    console.log("true")
}


// bestAnswer
function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}
scramble('scriptjava', 'javascript')
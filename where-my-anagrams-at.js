function anagrams(word, words) {
    let res = [];
    word = word.split('').sort().toString();
    for (i = 0; i < words.length; i++) {
        console.log(words[i].split("").sort());
        if (words[i].split("").sort().toString() === word) {
            res.push(words[i])
        }
    }
    console.log(res)
}

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function (v) { return word == v.split('').sort().join(''); });
}
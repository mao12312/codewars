// 最初の文字最後の文字交換
let str2 = "abcdefg"
let re2 = /(^\w)(\w*)(\w$)/
let res2 = str2.replace(re2, `$3$2$1`)
console.log(res2)

// 2文字め最後の文字交換
let str = "abcdefg"
let re = /(^\w)(\w)(\w*)(\w$)/
let res = str.replace(re, `$1$4$3$2`)
console.log(res)


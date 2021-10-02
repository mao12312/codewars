const lcs = (x, y) => {
    let res = y.split('').map(e => { if (x.match(e)) { return e } else { "" } }).join('')
    return res
}
lcs("anothertest", "")
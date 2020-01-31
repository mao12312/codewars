const inArray = (ar1, ar2) => {
    let res = [];
    for (let i = 0; i < ar2.length; i++) {
        for (let j = 0; j < ar1.length; j++) {
            let re = new RegExp(ar1[j] + '(.*?)', 'g')
            if (ar2[i].match(re)) {
                res.push(ar1[j])
            }
        }
    }
    let setRes = new Set(res)
    return Array.from(setRes).sort()
}
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["live", "strong", "arp"]
inArray(a1, a2)
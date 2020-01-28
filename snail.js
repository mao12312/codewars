// check
const snail = (array) => {
    let res = []
    while (array.length) {
        res.push(...array.shift())
        for (let i = 0; i < array.length; i++) {
            res.push(array[i].pop())
        }
        res.push(...(array.pop() || []).reverse())
        for (let i = array.length - 1; i >= 0; i--) {
            res.push(array[i].shift())
        }
    }
    console.log(res)
}
snail([[1, 2, 3], 
       [4, 5, 6], 
       [7, 8, 9]]);
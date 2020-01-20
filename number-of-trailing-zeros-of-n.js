const zeros = (n) => {
    let num = 1;
    let count = 0;
    if (n === 0) { return 0 }
    for (let i = 1; i <= n; i++) {
        console.log(num *= i);
    }
    let res = String(num).split('')
    // for (let j = res.length - 1; j >= 0; j--) {
    //     if(res[j]==="0"){
    //         count++
    //     }else{
    //         console.log(count)
    //         break
    //     }
    // }
    // console.log(res)
    console.log(num)
}
zeros(30)
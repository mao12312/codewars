// Find The Parity Outlier
// My answer
function findOutlier(integers) {
    let even = [];
    let odd = [];
    for(let i = 0; i<integers.length; i++){
        if(integers[i]%2===0){
            even.push(integers[i]);
        }else{
            odd.push(integers[i]);
        }
    }
    if(even.length>odd.length){
        // console.log(odd[0]);
        return odd[0];
    }else{
        // console.log(even[0]);
        return even[0];
    }
}

// // bestanswer
// function findOutlier(int) {
//     // a => は代入
//     var even = int.filter(a => a % 2 === 0);
//     var odd = int.filter(a => a % 2 !== 0);
//     // 式 ? true : false はif文簡略化
//     console.log(even.length === 1 ? even[0] : odd[0]);
// }
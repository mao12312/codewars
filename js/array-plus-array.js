const arrayPlusArray = (arr1, arr2) => {
    let res = 0;
    for(let i = 0; i<arr1.length; i++){
        res += arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        res += arr2[j]
    }
    return res;
}
arrayPlusArray([1, 2, 3], [4, 5, 6])

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

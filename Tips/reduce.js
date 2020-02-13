const reduceTest = (str1) => {
    let res = str1.split("").reduce((prev, cur) => { prev[cur] ? prev[cur]++ : prev[cur] = 1; return prev; }, {});
    console.log(res)
}
reduceTest("hello")

const nums = [1, 2, 3, 4, 5];

// 初期値あり
const result1 = nums.reduce((prev, current, index, array) => {
    console.log(prev, current, index, array);
    return prev + current;
}, 0);
console.log(result1); // 15

// 初期値なし
const result2 = nums.reduce((prev, current, index, array) => {
    console.log(prev, current, index, array);
    return prev + current;
});
console.log(result2); // 15 


const data = [
    { name: 'Taro', age: 20 },
    { name: 'Hanako', age: 25 },
    { name: 'Tom', age: 30 }
];

/* こういう形にしたい
{
  1: { name: 'Taro', age: 20 },
  2: { name: 'Hanako', age: 25 },
  3: { name: 'Tom', age: 30 }
}
*/
const result = data.reduce((prev, current, index) => {
    prev[index + 1] = current;
    return prev;
}, {});

console.log(result);
/* 実行結果
 {
  1: {name: "Taro", age: 20},
  2: {name: "Hanako", age: 25},
  3: {name: "Tom", age: 30}
}
*/

// 参考
// https://kde.hateblo.jp/entry/2018/10/13/065738
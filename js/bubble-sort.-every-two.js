//ソート前の配列データ
let array01 = ["c", "b", "b", "b", "a"];
//調べる範囲の開始位置を１つずつ後ろへ移動するfor文
for (let i = 0; i < array01.length; i++) {
    //前から後ろに向かって小さい値を確認するfor文
    for (let j = 0; j < array01.length; j++) {
        //2つおきの値を比べて、前が大きければ交換する
        // console.log(array01[j].charCodeAt());
        let str01 = array01[j];
        let str02 = (array01[j + 2] === undefined) ? array01[j] : array01[j + 2];
        
        if (str01.charCodeAt() > str02.charCodeAt()) {
            let tmp = array01[j];
            array01[j] = array01[j + 2];
            array01[j + 2] = tmp;
        }
        // console.log(array01)
    }
}
console.log(array01);
// 2000データを超えるとタイムアウト
// 11000ms

"use strict";
function main(lines) { // lines: Array<string>
    let line_spt = lines[0].split('');
    for (let i = 0; i < line_spt.length; i++) {
        for (let j = 0; j < line_spt.length; j++) {

            let str01 = line_spt[j];
            let str02 = (line_spt[j + 2] === undefined) ? line_spt[j] : line_spt[j + 2];

            if (str01.charCodeAt() > str02.charCodeAt()) {
                let tmp = line_spt[j];
                line_spt[j] = line_spt[j + 2];
                line_spt[j + 2] = tmp;
            }
        }
    }
    let result = line_spt.join('')
    console.log(result);
}
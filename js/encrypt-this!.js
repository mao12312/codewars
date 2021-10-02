const encryptThis = (text) => {
    let resArr = []
    let txtSpt = text.split(' ');
    for (let i = 0; i < txtSpt.length; i++) {
        let headStr = txtSpt[i].slice(0, 1).charCodeAt(0);
        let backStr = txtSpt[i].slice(1).split('');
        switch (backStr.length) {
            case 0: break;
            case 1: backStr = backStr.join(''); break;
            case 2: backStr = backStr.reverse().join(''); break;
            default:
                let secondStr = backStr[0];
                let midStr = backStr.slice(1, [backStr.length - 1]);
                let lastStr = backStr[backStr.length - 1];
                backStr = lastStr + midStr.join('') + secondStr;
                break;
        }
        resArr.push(headStr + backStr);
    }
    let res = resArr.join(' ');
    return res;
}


// other answer
const encryptThis = text => text
    .split(' ')
    .map(word => word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0)))
    .join(' ');
encryptThis("A wise old owl lived in an oak")
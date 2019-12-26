function cleanString(s) {
    // 先頭の文字が'#'もしくは, 文字+'#'の場合
    let re = /(^|[^#])#/g
    while (s.indexOf('#') >= 0) {
        s = s.replace(re, '');
    }
    return s;
};

function clean_string(string) {
    while (string.indexOf('#') >= 0)
        string = string.replace(/(^|[^#])#/g, '');
    return string;
}

cleanString('abc##d######')
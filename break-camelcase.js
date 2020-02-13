const solution = (string) => {
    let res = string.replace(/([A-Z])/g,' $&');
    return res
}
solution('camelCasingAaaa')
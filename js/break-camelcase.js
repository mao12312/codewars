const solution = (string) => {
    let res = string.replace(/([A-Z])/g,' $&');
    console.log(res)
}
solution('camelCasingAaaa')
const toUnderScore = (name) => {
    let res = name.replace(/([A-Za-z](?=[A-Z\d])|\d(?=[A-Z]))/g, '$&_');
    console.log(res);
}
toUnderScore("ThisIsAUnitTest")
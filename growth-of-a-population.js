const nbYear = (p0, percent, aug, p) => {
    let age = 0
    for (i = p0; i < p; age++) {
        i = i + i * (percent / 100) + aug
    }
    return age
}
nbYear(1500, 5, 100, 5000)
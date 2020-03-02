const pattern = (n) => {
    let output = "";
    for (i = 1; i <= n; i++) {
        for (j = 0; j < i; j++) {
            output += i
        }
        if (i === n) break; {
            output += "\n"
        }
    }
    return output
}
pattern(2)
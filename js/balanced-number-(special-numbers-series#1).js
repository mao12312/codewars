const balancedNum = (number) => {
    let i, result = 0;
    number = number + "";
    for (i = 0; i < number.length / 2 - 1; i++) {
        result += +number[i] - +number[number.length - 1 - i];
    }
    return result === 0 ? "Balanced" : "Not Balanced";
}
balancedNum(1024)



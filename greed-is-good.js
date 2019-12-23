function score(dice) {
    let score = 0;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;

    dice.forEach(e => {
        if (e === 1) { one++ }
        if (e === 2) { two++ }
        if (e === 3) { three++ }
        if (e === 4) { four++ }
        if (e === 5) { five++ }
        if (e === 6) { six++ }
    });

    if (one === 3) {
        score += 1000;
    } else if (one > 3) {
        score += 1000 + ((one - 3) * 100);
    } else {
        score += one * 100;
    }
    if (two > 3) {
        score += 200;
    }
    if (three >= 3) {
        score += 300;
    }
    if (four >= 3) {
        score += 400;
    }
    if (five === 3) {
        score += 500;
    } else if (five > 3) {
        score += 500 + ((five - 3) * 50);
    } else {
        score += five * 50;
    }
    if (six >= 3) {
        score += 600;
    }
    return score;
}
score([2, 4, 4, 5, 4])
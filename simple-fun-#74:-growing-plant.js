const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let len = 0;
    let count = 0

    while (len < desiredHeight) {
        len += upSpeed;
        if (len >= desiredHeight) {
            count++
            break;
        } else {
            len -= downSpeed;
            count++
        }
    }
    return count
}

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    if (desiredHeight - upSpeed < 0) {
        return 1
    } else {
        // （目標値 - 1日あたりの増加量）/（1日あたりの増加量 - 1日あたりの減少量）
        return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1
    };

}
growingPlant(10, 9, 4)
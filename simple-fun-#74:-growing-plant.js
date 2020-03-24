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
growingPlant(10, 9, 4)
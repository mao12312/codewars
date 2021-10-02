function snail(column, day, night) {
    let resDay = 0;
    let dis = 0;

    while (dis < column) {
        dis += day;
        resDay++
        if (dis < column) {
            dis -= night;
        } else {
            break;
        }
    }
    return resDay;
}

function snail(column, day, night) {
    const days = (column - night) / (day - night);
    return days < 1 ? 1 : Math.ceil(days);
}
snail(3, 2, 1)
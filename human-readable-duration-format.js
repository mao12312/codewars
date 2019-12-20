function formatDuration(seconds) {
    h = Math.floor(seconds / 3600);
    m = Math.floor(seconds % 3600 / 60);
    s = Math.floor(seconds % 60);

    let hour = "hour"
    let minute = "minute"
    let second = "second"
    if (h !== 1 && h > 0) {
        hour = hour + "s"
    } else if (h === 0) {
        delete h && delete hour;
    }
    if (m !== 1 && m > 0) {
        minute = minute + "s"
    } else if (m !== 0) {
        minute = "";
    }
    if (s !== 1 && s > 0) {
        second = second + "s"
    } else if (s !== 0) {
        second = "";
    }

    console.log(h);
    console.log(m);
    console.log(s);
    console.log(hour)
    console.log(minute)
    console.log(second)
    console.log(`${h}:${m}:${s}`)
}

formatDuration(62)
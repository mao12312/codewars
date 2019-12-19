function humanReadable(seconds) {
    let h = ('00' + Math.floor(seconds / 3600)).slice(-2);
    let m = ('00' + Math.floor(seconds % 3600 / 60)).slice(-2);
    let s = ('00' + seconds % 60).slice(-2);

    return `${h}:${m}:${s}`
}

humanReadable(36001)
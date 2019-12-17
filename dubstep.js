function songDecoder(song) {
    res = song.split('WUB').filter(function(e){
        return  !(e === "");
    }).join(" ");
    console.log(res);
}

// // best Answer
// function songDecoder(song) {
//     return song.replace(/(WUB)+/g, " ").trim()
// }

// function songDecoder(song) {
//     return song.split('WUB').filter(Boolean).join(' ');
// }

songDecoder("WUBAWUBBWUBCWUB")
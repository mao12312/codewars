MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
};

var decodeBits = function (bits) {
    bits = bits.replace(/^0+/, '').replace(/0+$/, '');
    
    // Find transmission rate
    var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function (b) { return b.length }))
    console.log(rate);
    // Convert to morse code
    bits = bits
        .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
        .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
        .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
        .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')

    // return bits
            
}

var decodeMorse = function (morseCode) {

    let decodeString = '';
    morseCodeSpt = morseCode.split('  ');
    for (i in morseCodeSpt) {
        var morseCodeArray = morseCodeSpt[i].split(' ');
        for (j in morseCodeArray) {
            if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
                decodeString += MORSE_CODE[morseCodeArray[j]];
            }
        }
        decodeString += ' ';
    }
    decodeString = decodeString.trim();
    return decodeString
}

// decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))
decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')
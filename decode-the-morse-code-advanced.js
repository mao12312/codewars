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
    let res = ''
    let a = bits.replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
    
    console.log(a)
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
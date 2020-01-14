const decodeMorse = (morseCode) => {
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
    let decodeString = '';
    morseCodeSpt = morseCode.split('   ');
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

decodeMorse('.... . -.--   .--- ..- -.. .')

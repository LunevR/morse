const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const LETTER_LENGTH = 10;

const SYMBOL_LENGTH = 2;

function decode(expr) {
    let result = ''

    for (let i = 0; i < expr.length; i+= LETTER_LENGTH) {
        result+= getLetter(expr.substr(i, LETTER_LENGTH));
    }

    return result
}

function getLetter(letterCode) {
    let wordCode = '';

    if (letterCode === '**********') {
        return ' '
    } else {
        for (j = 0; j < letterCode.length; j+= SYMBOL_LENGTH) {
            wordCode+= getSymbol(letterCode.substr(j, SYMBOL_LENGTH))
        }

        return MORSE_TABLE[wordCode]
    }
}

function getSymbol(symbolCode) {
    if (symbolCode === '10') {
        return '.'
    } else if (symbolCode === '11') {
        return '-'
    } else {
        return ''
    }
}

module.exports = {
    decode
}

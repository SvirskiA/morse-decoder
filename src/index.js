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

function decode(expr) {
	let copy = '';
	let result = '';
	
	for (let i = 0; i < expr.length / 10; i++){		
		copy = expr.slice(i * 10,i * 10 + 10);
		let numericSymbol = '';
		let symbol = '';
		
		if (copy === '**********'){
			result += ' ';
		} else {
			for (let j = 0; j < 5; j++){
				numericSymbol = copy.slice(j * 2,j * 2 + 2);
				if (numericSymbol === '10'){
					symbol += '.';
				} else if (numericSymbol === '11'){
					symbol += '-';
				}
			}
			result += MORSE_TABLE[symbol];
		}
	}
	console.log(result);
	return result;
}

module.exports = {
    decode
}
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
    
    let exprArr = expr.split("**********");
    let rezArr = [];
    exprArr.forEach(i => {
        i.length;
        let letter = i.split("").reduce((acc, it, index) => {
        if (index % 10 !== 0 ) return acc 
        acc.push(i.slice(index, index+10))
        return acc
    }, [])
        rezArr.push(letter)
    })
    
    let morzeW = []
    rezArr.forEach(it => {
        let morze = []
        it.forEach(w => {
            let wordArr = w.split("00").filter(i => i)[0].split("");
            let wordMorze = [];
            for (let i = 0; i < wordArr.length; i+=2) {
                if (String(wordArr[i])+String(wordArr[i+1]) === "10") {
                    wordMorze.push(".")
                } else if (String(wordArr[i])+String(wordArr[i+1]) === "11") {
                    wordMorze.push("-")
                }           
            }
            morze.push(wordMorze.join(""))
        })
        morzeW.push(morze) 
    })
    
    let resultArr = [];
    morzeW.forEach(it => { 
        let resultWord = "";       
        it.map(i => {
            i = MORSE_TABLE[i]
            resultWord +=i
        })
        resultArr.push(resultWord) 
    })

    let result = resultArr.join(" ")
    return result;
}

module.exports = {
    decode
}
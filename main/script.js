function capitalize(text) {
    return text.at(0).toUpperCase() + text.slice(1)
}

function reverseString(text) {
    return text.split('').reverse().join('');
}

const calc = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => {
        if (b == 0) throw new Error("No Math?")
        return a / b;
    },
}

function caesarCipher(text, shift) {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i].toUpperCase() != text[i].toLowerCase()) {
            arr.push(String.fromCharCode(text.charCodeAt(i) + shift));
        } else {
            arr.push(text[i])
        }
    }
    return arr.join('')
}


export { capitalize, reverseString, calc, caesarCipher }


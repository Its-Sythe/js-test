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

function caesarCipher(str, shift) {
    const n = shift > 0 ? shift : 26 + (shift % 26)
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i)
        if (str[i].toUpperCase() != str[i].toLowerCase()) {
            if (c >= 65 && c <= 90)
                arr.push(String.fromCharCode(((c - 65 + n) % 26) + 65))
            if (c >= 97 && c <= 122)
                arr.push(String.fromCharCode(((c - 97 + n) % 26) + 97))
        } else {
            arr.push(str[i])
        }
    }
    return arr.join('')
}

console.log(caesarCipher('xyz', 3))

export { capitalize, reverseString, calc, caesarCipher }


const src = require('./script.js')

describe('All the tests', () => {
    test('file exists', () => {
        expect(src).toBeDefined();
    })

    describe('Capitalize test', () => {
        test('first test', () => {
            expect(src.capitalize('hello, world!')).toEqual('Hello, world!')
        })
        test('second test', () => {
            expect(src.capitalize('goodbye, world :(')).toEqual('Goodbye, world :(')
        })
    })

    describe('Revese string test', () => {
        test('first test', () => {
            expect(src.reverseString('Hello, world')).toEqual('dlrow ,olleH')
        })
        test('second test', () => {
            expect(src.reverseString('Goodbye, world')).toEqual('dlrow ,eybdooG')
        })
    })

    describe('Calc test', () => {
        test('first test: add', () => {
            expect(src.calc.add(1, 2)).toEqual(3)
        })
        test('second test: subtract', () => {
            expect(src.calc.subtract(3, 1)).toEqual(2)
        })
        test('third test: multiply', () => {
            expect(src.calc.multiply(2, 3)).toEqual(6)
        })
        test('fourth test: divide', () => {
            expect(src.calc.divide(4, 2)).toEqual(2)
        })
        test('fourth test(2)Check division by 0: divide', () => {
            expect(() => src.calc.divide(4, 0)).toThrow(Error);
        })
    })

    describe('Cipher *pol* test', () => {
        test('first test', () => {
            expect(src.caesarCipher('xyz', 3)).toEqual('abc')
        })
        test('second test', () => {
            expect(src.caesarCipher('HeLLo', 3)).toEqual('KhOOr')
        })
        test('third test', () => {
            expect(src.caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!')
        })
    })

    describe('Array tests', () => {
        const arr = [1, 8, 3, 4, 2, 6]
        test('first test', () => {
            expect(src.analyzeArray(arr).average).toEqual(4)
        })
        test('second test', () => {
            expect(src.analyzeArray(arr).min).toEqual(1)
        })
        test('third test', () => {
            expect(src.analyzeArray(arr).max).toEqual(8)
        })
        test('fourth test', () => {
            expect(src.analyzeArray(arr).length).toEqual(6)
        })
    })
})

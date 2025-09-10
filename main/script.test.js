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
})

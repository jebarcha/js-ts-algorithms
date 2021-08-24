import { fizzBuzz } from "../core/fizzbuzz";
// multiples of 3 are Fizz
// multiples of 5 are Buzz
// multiples of 15 are FizzBuzz
//Ex: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16

xdescribe('FizzBuzz should', () => {
    
    it('should return 1 if receive 1', () => {
        const expectedResult = 1;
        const result = fizzBuzz(1);

        console.log('result', result);
        expect(result).toBe(expectedResult);
    });

    it('should return fizz if receive three', () => {
        const expectedResult = 'fizz';
        const result = fizzBuzz(3);

        expect(result).toBe(expectedResult);
    });

    it('should return buzz if receive five', () => {
        const expectedResult = 'buzz';
        const result = fizzBuzz(5);

        expect(result).toBe(expectedResult);
    });

    it('should return fizz if receive nine', () => {
        const expectedResult = 'fizz';
        const result = fizzBuzz(9);

        expect(result).toBe(expectedResult);
    });

    it('should return buzz if receive ten', () => {
        const expectedResult = 'buzz';
        const result = fizzBuzz(10);

        expect(result).toBe(expectedResult);
    });

    it('should return fizzbuzz if receive fifteen', () => {
        const expectedResult = 'fizzbuzz';
        const result = fizzBuzz(15);

        expect(result).toBe(expectedResult);
    });

});
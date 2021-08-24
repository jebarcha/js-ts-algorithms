import { fibonacci } from '../core/fibonacci';

//n  0 1 2 3 4 5 6  7  8  9 10 11  12
//Fn 0 1 1 2 3 5 8 13 21 34 55 89 144

xdescribe('Fibonacci should', () => {
    it('return zero if receive zero', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('return one if receive one', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('return one if receive two', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('return two if receive three', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('return three if receive four', () => {
        expect(fibonacci(4)).toBe(3);
    });

    it('return 55 if receive ten', () => {
        expect(fibonacci(10)).toBe(55);
    });

});


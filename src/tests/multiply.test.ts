import { multiply } from '../core/multiply';

describe('Multiply 2 numbers without using the multiply symbol', () => {

    it('should return negative number if multiplier is negative', () => {
        let res = multiply(50, -50);

        expect(res).toBeLessThan(0);
    });

    it('should return positive number if multiplier is positive', () => {
        let res = multiply(50, 50);

        expect(res).toBeGreaterThan(0);
    });

    it('should return 15 if multiplication is 3 and 5', () => {
        let res = multiply(3, 5);

        expect(res).toBe(15);
    });

});


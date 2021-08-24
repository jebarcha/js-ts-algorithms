import { getBiggest } from '../core/greaterNumberInArray';

describe('get greater number in an array iterating the array only once', () => {
    it('should array contains only numbers', () => {
        const arr = [50, -500, 1000, 0, 1, 54];
        let isNotANumber = false;

        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] !== 'number') {
                isNotANumber = true;
                break;
            } 
        }

        expect(isNotANumber).toBeFalsy();
    });

    it('should resturn biggest number in an array of numbers', () => {
        const expectedResult = 1000;
        const arr = [50, -500, 1000, 0, 1, 54];

        const result = getBiggest(arr);

        expect(result).toBe(expectedResult);
    });
});
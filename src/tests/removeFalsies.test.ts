import { removeFalsies } from '../core/removeFalsies';

describe('Iterating and array only once, remove: undefined, false, 0, null', () => {
    
    const arr = [1, undefined, null, 0, 2, 3, false];

    // beforeEach(() => {
    // });   

    it('should remove undefined values from array', () => {
        const result = removeFalsies(arr);
        expect(result).not.toContain(undefined);
    });

    it('should remove false values from array', () => {
        const result = removeFalsies(arr);
        expect(result).not.toContain(false);
    });

    it('should remove null values from array', () => {
        const result = removeFalsies(arr);
        expect(result).not.toContain(null);
    });

    it('should remove 0 values from array', () => {
        const result = removeFalsies(arr);
        expect(result).not.toContain(0);
    });
});
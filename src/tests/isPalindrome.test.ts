import { isPalindrome } from '../core/isPalindrome';

describe('A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward', () => {

    it('should not read the same backward as forward', () => {
        const str = 'This is not a palindrome';
        const result = isPalindrome(str);

        expect(result).toBe(false);
    });

    it('should read the same backward as forward', () => {
        const str = 'madam';
        const result = isPalindrome(str);

        expect(result).toBe(true);
    });
});
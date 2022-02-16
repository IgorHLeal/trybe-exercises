const myFizzBuzz = require('./myFizzBuzz');

describe('checks if it is divisible by 3 and 5', () => {
    it('divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('a')).toBe(false);
    });
});
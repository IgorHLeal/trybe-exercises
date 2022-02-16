const sum = require('./sum');

describe ('test the sum function', () => {
   it ('should return the result of the sum', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
   });
   it ('throw an error if it receives a string in one of the parameters', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
   });
});


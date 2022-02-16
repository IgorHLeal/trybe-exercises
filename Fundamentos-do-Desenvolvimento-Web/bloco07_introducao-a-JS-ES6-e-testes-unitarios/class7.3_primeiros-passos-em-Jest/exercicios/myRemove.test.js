const myRemove = require('./myRemove');

describe ('Check that calling myRemove', () => {
    it ('Check that calling myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4], 3);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});
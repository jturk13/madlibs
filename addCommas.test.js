const addCommas = require('./addcommas');

test('adds commas to a number with more than three digits', () => {
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(1000000)).toBe('1,000,000');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
});

test('returns the same number if it has less than four digits', () => {
    expect(addCommas(6)).toBe('6');
    expect(addCommas(-10)).toBe('-10');
    expect(addCommas(-5678)).toBe('-5,678');
});

test('adds commas to numbers with decimal parts', () => {
    expect(addCommas(12345.678)).toBe('12,345.678');
    expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
});

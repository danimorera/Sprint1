const {
    sum,
    resta,
    mult,
    div
} = require('../app/ops.js');

test('Basic test for sum', () => {
    expect(sum(2, 2)).toBe(4);
});

test('Input test for sum', () => {
    expect(sum('a', 'b')).toBe('Please enter only numbers');
});

test('Basic test for resta', () => {
    expect(resta(2, 2)).toBe(0);
});

test('Input test for resta', () => {
    expect(resta('1', '0')).toBe(1);
});

test('Basic test for mult', () => {
    expect(mult(2, 2)).toBe(4);
});

test('Input test for mult', () => {
    expect(mult(0, '10')).toBe(0);
});

test('Basic test for div', () => {
    expect(div(2, 2)).toBe(1);
    expect(div(2, 1)).toBe(2);
});

test('Input test for div', () => {
    expect(div('o', 0)).toBe('Please enter only numbers');
});

test('Divisor is 0 test for div', () => {
    expect(div('2', 0)).toBe('Please enter a valid divisor');
});
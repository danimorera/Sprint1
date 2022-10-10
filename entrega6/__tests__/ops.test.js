const ops = require('../app/ops.js');


test('test de suma', () => {
    expect(ops.sum(2, 2)).toBe(4);
    expect(ops.sum('a', 'b')).toBe('Please enter only numbers');
});

test('test de resta', () => {
    expect(ops.resta(2, 2)).toBe(0);
    expect(ops.resta('1', '0')).toBe(1);
});

test('test de multiplicacio', () => {
    expect(ops.mult(2, 2)).toBe(4);
    expect(ops.mult(0, '10')).toBe(0);
});

test('test de divisió', () => {
    expect(ops.div(2, 2)).toBe(1);
    expect(ops.div(2, 1)).toBe(2);
    expect(ops.div('o', 0)).toBe('Please enter only numbers');
    expect(ops.div('2', 0)).toBe('Please enter a valid divisor');
});

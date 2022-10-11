const sum = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2))
        return 'Please enter only numbers';
    return (num1 + num2);
};

const resta = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2))
        return 'Please enter only numbers';
    return (num1 - num2);
};

const mult = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2))
        return 'Please enter only numbers';
    return (num1 * num2);
};

const div = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2))
        return 'Please enter only numbers';
    if (num2 === 0)
        return 'Please enter a valid divisor';
    return (num1 / num2);
};

module.exports = {
    sum,
    resta,
    mult,
    div
}
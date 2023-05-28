// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2

// Phone number validation tests
test('(000) 000-0000 is the valid phone number', () => {
    expect(functions.isPhoneNumber('(000) 000-0000')).toBe(true);
});

test('111-111-1111 is the valid phone number', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('100 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('100')).toBe(false);
});

test('xyz is not a valid phone number', () => {
    expect(functions.isPhoneNumber('xyz')).toBe(false);
});

// Email validation tests
test('abc@gmail.com is a valid email', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
});

test('johndoe@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('johndoe@ucsd.edu')).toBe(true);
});

test('abc@gmail is not a valid email', () => {
    expect(functions.isEmail('abc@gmail')).toBe(false);
});

test('abc is not a valid email', () => {
    expect(functions.isEmail('abc')).toBe(false);
});

// Strong password validation tests
test('abc123 is a strong valid password', () => {
    expect(functions.isStrongPassword('abc123')).toBe(true);
});

test('A112233 is a strong valid password', () => {
    expect(functions.isStrongPassword('A112233')).toBe(true);
});

test('abc is not a strong valid password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('123 is not a strong valid password', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

// Date validation tests
test('05/28/2023 is a valid date', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

test('5/5/5555 is a valid date', () => {
    expect(functions.isDate('5/5/5555')).toBe(true);
});

test('5/5/55 is not a valid date', () => {
    expect(functions.isDate('5/5/55')).toBe(false);
});

test('222/333/55555 is not a valid date', () => {
    expect(functions.isDate('222/333/55555')).toBe(false);
});

// Hex color validation tests
test('#000000 is a valid hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('#FFFFFF is a valid hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('cyan is not a valid hex color', () => {
    expect(functions.isHexColor('cyan')).toBe(false);
});

test('#blackout is not a valid hex color', () => {
    expect(functions.isHexColor('#blackout')).toBe(false);
});
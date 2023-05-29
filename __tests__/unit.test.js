// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(123) 456-7890 is a phone number', () => { expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true); });
test('(945) 123-5914 is a phone number', () => { expect(functions.isPhoneNumber('(945) 123-5914')).toBe(true); });
test('1234567890 is not a phone number', () => { expect(functions.isPhoneNumber('1234567890')).toBe(false); });
test('a341359021 is not a phone number', () => { expect(functions.isPhoneNumber('a341359021')).toBe(false); });

test('abc@gmail.com is an email', () => { expect(functions.isEmail('abc@gmail.com')).toBe(true); });
test('abc@hotmail.co is an email', () => { expect(functions.isEmail('abc@hotmail.co')).toBe(true); });
test('abc@gmail.como is not an email', () => { expect(functions.isEmail('abc@gmail.como')).toBe(false); });
test('abcgmail.como is not an email', () => { expect(functions.isEmail('abcgmail.como')).toBe(false); });

test('a1234985 is a strong password', () => { expect(functions.isStrongPassword('a1234985')).toBe(true); });
test('asdlfkjk89 is a strong password', () => { expect(functions.isStrongPassword('asdlfkjk89')).toBe(true); });
test('1234985 is not a strong password', () => { expect(functions.isStrongPassword('1234985')).toBe(false); });
test('aaaaaakjhfsfewrhjqj is not a strong password', () => { expect(functions.isStrongPassword('aaaaaakjhfsfewrhjqj')).toBe(false); });

test('12/1/0951 is a date', () => { expect(functions.isDate('12/1/0951')).toBe(true); });
test('1/90/0000 is a date', () => { expect(functions.isDate('1/90/0000')).toBe(true); });
test('123/123/2134 is not a date', () => { expect(functions.isDate('123/123/2134')).toBe(false); });
test('1//2134 is not a date', () => { expect(functions.isDate('1//2134')).toBe(false); });

test('#FFF is a hex color', () => { expect(functions.isHexColor('#FFF')).toBe(true); });
test('#A90521 is a hex color', () => { expect(functions.isHexColor('#A90521')).toBe(true); });
test('#ZZZ is not a hex color', () => { expect(functions.isHexColor('#ZZZ')).toBe(false); });
test('#AFAFAFAF is not a hex color', () => { expect(functions.isHexColor('#AFAFAFAF')).toBe(false); });

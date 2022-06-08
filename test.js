const stringLength = require('./length.js');
const capitalizeStr = require('./capitalize.js');
const reverseString = require('./reverse.js');
const calc = require('./calc.js')

describe('find str length', () => {
  test('string length "adam" equals 4', () => {
    expect(stringLength('adam')).toBe(4);
  });
  
  test('string length "" equals Error!', () => {
    expect(stringLength('')).toBe('Error!');
  });
});

test('reverse of "hello" equals "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('capitalize first letter "author" equals "Author"', () => {
  expect(capitalizeStr('author')).toBe('Author')
})

describe('calculator', () => {
  test('add(1, 2) equals 3', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  
  test('subtract(5, 2) equals 3', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('divide(12, 2) equals 6', () => {
    expect(calc.divide(12, 2)).toBe(6);
  });
});
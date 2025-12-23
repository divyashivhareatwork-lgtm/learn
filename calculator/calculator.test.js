const { add, sub, mul, div } = require('./calculator');

describe('Calculator Module', () => {
  test('adds numbers', () => expect(add(2, 3)).toBe(5));
  test('subtracts numbers', () => expect(sub(10, 4)).toBe(6));
  test('multiplies numbers', () => expect(mul(6, 7)).toBe(42));
  test('divides numbers', () => expect(div(8, 2)).toBe(4));
  test('division by zero throws error', () =>
    expect(() => div(10, 0)).toThrow('Division by zero'));
});

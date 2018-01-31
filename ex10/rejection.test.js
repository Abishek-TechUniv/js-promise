const { iterate, alwaysThrows } = require('./rejection');

test('testing always throws', () => {
  expect(alwaysThrows).toThrow();
});

describe('testing iterate method', () => {
  global.console = { log: jest.fn() };
  test('should print the input to the console', () => {
    const input = 5;
    iterate(5);
    expect(console.log).toHaveBeenCalledWith(input);
  });
  test('should return 1 more than the input value', () => {
    expect(iterate(4)).toBe(5);
  });
});

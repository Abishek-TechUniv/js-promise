const { promise, iterate, alwaysThrows } = require('./rejection');

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

describe('testing promise', () => {
  test('promise should be of type promise object', () => {
    expect(typeof promise).toBe('object');
  });

  test('promise should resolve to be next value', () => {
    expect(promise.then(iterate)).resolves.toBe(2);
  });
});


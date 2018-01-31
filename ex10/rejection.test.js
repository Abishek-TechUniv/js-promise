const alwaysThrows = require('./rejection');

test('testing always throws', () => {
  expect(alwaysThrows).toThrow();
});

const promises = require('./promises');

test('should return FULFILLED!', () =>
  expect(promises).resolves.toBe('FULFILLED!'));

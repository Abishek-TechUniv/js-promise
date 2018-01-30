const promise = require('./always');

test('should return PROMISE VALUE!', () =>
  expect(promise).resolves.toBe('PROMISE VALUE'));

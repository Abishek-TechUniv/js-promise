const promise = require('./always');

test('should return I FIRED!', () =>
  expect(promise).resolves.toBe('PROMISE VALUE'));

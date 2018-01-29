const promise = require('./reject');

test('should return REJECTED!', () =>
  expect(promise).rejects.toThrow(new Error('REJECTED!')));

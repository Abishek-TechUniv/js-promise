const { promise1, promise2, promise3 } = require('./shortcuts');

test('should return an error object!', () =>
  expect(promise1).rejects.toEqual(new Error('THERE IS AN ERROR')));

test('should return a resolved promise', () =>
  expect(promise2).resolves.toBe('NO ERROR'));

test('should return an error object for Promise.reject', () =>
  expect(promise3).rejects.toEqual(new Error('ERROR REASON')));

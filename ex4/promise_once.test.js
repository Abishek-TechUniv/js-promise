const promise = require('./promise_once');

test('should return I FIRED!', () =>
  expect(promise).resolves.toBe('I FIRED'));

// test('should not return I DID NOT FIRE!', () =>
//   expect(promise).not.rejects);

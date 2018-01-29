const promise = require('./promise');

test('should return FULFILLED!', () => {
  // const call = (data) => {
  //   expect(data).toBe('FULFILLED!');
  //   done();
  // };
  expect.assertions(1);
  return expect(promise).resolves.toBe('FULFILLED!');
});

const parsePromised = require('./error');

test('should not return anything if json syntax correct', () =>
  expect(parsePromised('{"let" : 2}')).resolves.toEqual({ let: 2 }));


test('should return a  callback on then', () =>
  expect(parsePromised('{let" : 2}')).rejects.toThrow());

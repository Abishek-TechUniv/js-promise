const promise = require('./always');

test('should return PROMISE VALUE!', () =>
  expect(promise).resolves.toBe('PROMISE VALUE'));

// test('should behave...', () => {
//   const resultArr = [];
//   const push = data => resultArr.push(data);
//   console.log = push;
//   promise.then(console.log);
//   console.log('DATA');
//   expect(resultArr).toBe(['DATA', 'PROMISE VALUE']);
// });

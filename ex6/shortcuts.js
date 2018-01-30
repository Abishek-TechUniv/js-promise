const promise1 = new Promise((resolve, reject) => {
  reject(new Error('THERE IS AN ERROR'));
});
const promise2 = Promise.resolve('NO ERROR');
const promise3 = Promise.reject(new Error('ERROR REASON'));


console.log = () => null;

promise1.then(null, console.log);
promise2.then(console.log);
promise3.catch(console.log);

module.exports = { promise1, promise2, promise3 };


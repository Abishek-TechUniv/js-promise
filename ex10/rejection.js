const alwaysThrows = () => { throw new Error('OH NOES'); };


const iterate = (num) => {
  console.log(num);
  return num + 1;
};

const promise = Promise.resolve(iterate(1));

promise.then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(error => console.log(error.message));

module.exports = { alwaysThrows, iterate, promise };

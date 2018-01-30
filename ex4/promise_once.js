const promise = new Promise(((fulfill, reject) => {
  const error = new Error('I DID NOT FIRE');
  fulfill('I FIRED');
  reject(error);
}));

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);

module.exports = promise;

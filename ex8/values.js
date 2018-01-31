const attachTitle = name => `DR. ${name}`;

const wrap = (callback) => {
  const promise = new Promise((resolve, reject) => {
    resolve('MANHATTAN');
  });

  promise.then(attachTitle).then(callback);
};

// wrap(console.log);
module.exports = { attachTitle, wrap };

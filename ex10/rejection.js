const alwaysThrows = () => { throw new Error('OH NOES'); };


const iterate = (num) => {
  console.log(num);
  return num + 1;
};

module.exports = { alwaysThrows, iterate };

const parsePromised = jsonStr => new Promise((resolve, reject) => {
  try {
    const result = JSON.parse(jsonStr);
    resolve(result);
  } catch (error) {
    reject(error.message);
  }
});

parsePromised(process.argv[2]).catch(console.log);

module.exports = parsePromised;

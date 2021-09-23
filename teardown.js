//something like ending logic of each test to have a clean setup

module.exports = async function() {
    await global.__MONGOD__.stop();
  };
const data = require('../data/dummyUser.json');

const getUserData = (req, res) => {
  res.json(data);
};

module.exports = { getUserData };

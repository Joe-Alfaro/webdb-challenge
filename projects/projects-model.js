const db = require('../data/dbConfig.js');

const find = () => (
  db('projects')
);

module.exports = {
  find
}

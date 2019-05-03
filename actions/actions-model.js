const db = require('../data/dbConfig.js');

const find = () => (
  db('actions')
);

const add = action => (
  db ('actions')
    .insert(action, 'id')
    .then(() => (
      db('actions')
    ))
);

module.exports = {
  find,
  add
}

const db = require('../data/dbConfig.js');

const find = () => (
  db('projects')
);

const add = project => (
  db('projects')
    .insert(project, 'id')
    .then(() => (
      db('projects') 
    ))
)

module.exports = {
  find,
  add
}

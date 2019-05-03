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

const findById = id => (
  db('projects')
    .where({ id })
    .first()
    .then(project => (
      db('actions')
        .where({ project_id: id })
        .then(actions => {
          project.actions = actions
          return project
        })
    ))
)

module.exports = {
  find,
  add,
  findById
}

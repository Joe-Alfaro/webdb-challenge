exports.seed = (knex, Promise) => (
  knex('actions').del()
  .then(() => (
    knex('actions').insert([
      {
        description: 'used dust collection',
        project_id: 1,
      },
      {
        description: 'turn on saw',
        notes: 'turn off saw when not in use',
        project_id: 1,
      },
      {
        description: 'replace air filters',
        notes: 'do every three months',
        project_id: 2,
      },
      {
        description: 'take out garbage daily',
        project_id: 2,
      },
      {
        description: 'learn them gud english',
        project_id: 3,
      },
      {
        description: 'learn them numbers',
        notes: 'like adding and such',
        project_id: 3,
      }
    ])
  ))
);

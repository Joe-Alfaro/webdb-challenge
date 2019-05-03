exports.seed = (knex, Promise) => (
  knex('projects').del()
    .then(() => (
      knex('projects').insert([
        {
          name: 'woodworking', 
          description: 'build some stuff with wood',
          completed: false
        },
        {
          name: 'house maintenance', 
          description: 'fix things around the house that needs fixing',
          completed: false
        },
        {
          name: 'homeschool kids', 
          description: 'learn the kids up gud',
          completed: false
        }
      ])
    ))
);

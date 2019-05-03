exports.up = (knex, Promise) => ( 
  knex.scema
    .createTable('projects', table => {
      table.increments();

      table.string('name', 255);
      table.text('description');
      table.boolean('completed');

      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('projects')
);

exports.up = (knex, Promise) => ( 
  knex.schema
    .createTable('projects', table => {
      table.increments();

      table.string('name', 128)
        .notNullable()
        .unique();
      table.text('description');
      table.boolean('completed');

      table.timestamps(true, true);
    })
    .createTable('actions', table => {
      table.increments();

      table.text('description')
        .notNullable()
        .unique();

      table.text('notes');

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
);


exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", function (table) {
    table.increments().primary();
    table.string("title");
    table.text("pbody");
    table.integer("user_id").unsigned().index().references('id').inTable('users').onDelete('cascade');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts")
}


exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", function (table) {
    table.increments().primary();
    table.text("cbody");
    table.integer("user_id").unsigned().index().references('id').inTable('users').onDelete('cascade');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments")
}

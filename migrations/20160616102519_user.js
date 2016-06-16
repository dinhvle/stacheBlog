
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function (table) {
    table.increments().primary();
    table.string("full_name");
    table.string("username");
    table.text("img_url", "longtext");
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
}

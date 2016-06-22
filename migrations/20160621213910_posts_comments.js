
exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts_comments", function (table) {
    table.increments().primary();
    table.integer("post_id").unsigned().index().references('id').inTable('posts').onDelete('cascade');
    table.integer("comment_id").unsigned().index().references('id').inTable('comments').onDelete('cascade');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts_comments")
}

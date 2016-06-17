var bookshelf = require('../db/bookshelf');
var Post = require('./post.js');

var User = bookshelf.Model.extend({
  tableName: 'users',

  posts: function() {
    return this.hasMany(Post);
  }
});

module.exports = User;

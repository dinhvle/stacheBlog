var bookshelf = require('../db/bookshelf');
var User = require('./user.js');

var Post = bookshelf.Model.extend({
  tableName: 'posts',

  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Post;

var bookshelf = require('../db/bookshelf');
var User = require('./user.js');

var Post = bookshelf.Model.extend({
  tableName: 'posts',

  hasTimestamps: true,

  author: function() {
    return this.belongsTo(User);
  }
});

module.exports = Post;

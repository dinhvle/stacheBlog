var express = require('express');
var router = express.Router({mergeParams: true});
var knex = require("../db/knex");
var User = require("../models/user")
var Post = require("../models/post");

require('locus');

// Index, fetch all users
router.get('/', (req,res) => {
  Post.forge().fetchAll().then((collection) => {
    res.send(collection.toJSON());
    // res.render('users/index', {title: 'stacheBlog Users', users: collection.toJSON()});
  })
})

// Create a new post
router.get('/new', (req,res) => {
  var id = req.params.user_id;
  res.render('posts/new', {id: id});
})

router.post('/', (req,res) => {
  var title = req.body.post.title;
  var body = req.body.post.pbody;
  var user_id = req.params.user_id;

  Post.forge({
    title: title,
    pbody: body,
    user_id: user_id
  }).save().then((post) => {
    res.redirect('/users/' + user_id + '/posts');
  })
})
//
// // Read, fetch a single post by id
router.get('/:id', (req,res) => {
  Post.forge({id: req.params.id}).fetch().then((post) => {
    // res.render('posts/show', {post: post.toJSON()})
    res.send(post.toJSON());
  })
})

// Get edit page to update a post
router.get('/:id/edit', (req,res) => {
  Post.forge({id: req.params.id}).fetch().then((post) => {
    res.render('posts/edit', {post: post.toJSON()});
  })
})

// Update a post
router.put('/:id', (req,res) => {
  var user_id = req.params.user_id;

  Post.forge({id: req.params.id}).fetch().then((post) => {
    post.save(req.body.user).then(() => {
      res.redirect('/users/' + user_id + '/posts');
    })
  })
})

// // Destroy a user
router.delete('/:id', (req,res) => {
  var user_id = req.params.user_id;

  Post.forge({id: req.params.id}).fetch().then((post) => {
    post.destroy().then(() => {
      res.redirect('/users/' + user_id + '/books');
    })
  })
})

module.exports = router;

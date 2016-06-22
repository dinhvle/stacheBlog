var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
var User = require("../models/user");

require('locus');

// Index, fetch all users
router.get('/', (req,res) => {
  User.forge().fetchAll().then((collection) => {
    res.render('users/index', {title: 'stacheBlog Users', users: collection.toJSON()});
  })
})

// Create a new user
router.get('/new', (req,res) => {
  res.render("users/new");
})

router.post('/', (req,res) => {
  User.forge(req.body.user).save().then((user) => {
    res.redirect('/users');
  })
})

// Read, fetch a single user by id
router.get('/:id', (req,res) => {
  User.forge({id: req.params.id}).fetch().then((user) => {
    res.render('users/show', {user: user.toJSON()});
    // res.send(user.toJSON());
  })
})

// Get edit page to update a user
router.get('/:id/edit', (req,res) => {
  User.forge({id: req.params.id}).fetch().then((user) => {
    res.render('users/edit', {user: user.toJSON()});
  })
})

// Upsate a user
router.put('/:id', (req,res) => {
  User.forge({id: req.params.id}).fetch().then((user) => {
    user.save(req.body.user).then(() => {
      res.redirect('/users');
    })
  })
})

// Destroy a user
router.delete('/:id', (req,res) => {
  User.forge({id: req.params.id}).fetch().then((user) => {
    user.destroy().then(() => {
      res.redirect('/users');
    })
  })
})

module.exports = router;

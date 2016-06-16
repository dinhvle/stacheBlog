var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
var User = require("../models/user");

require('locus');

// Index, fetch all users
router.get('/', (req,res) => {
  User.forge().fetchAll().then((collection) => {

  })
})


// Create a new user

router.get('/new', (req,res) => {
  res.render("users/new");
})

// router.post('/', (req,res) => {
//   User.forge(req.body.user).save().then((user) => {
//     res.redirect('/users');
//   })
// })
router.post('/', function(req, res) {
  Author.forge(req.body.user).save().then(function(author) {
    res.redirect('/users');
  });
});
// Read, fetch a single user by id
router.get('/:id', (req,res) => {
  User.forge({id: req.params.id}).fetch().then((user) => {
    res.render('users/show', {user: user.toJSON()})
  })
})



module.exports = router;

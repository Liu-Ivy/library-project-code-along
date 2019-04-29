  var express = require('express');
  var router = express.Router();
  const Author = require('../models/AuthorModel');



  // GET '/authors/add'
  router.get('/add', (req, res, next) => {
    res.render('author-add')
  });

  // POST '/authors/add'
  router.post('/add', (req, res, next) => {
    const { name, lastName, nationality, birthday, pictureUrl } = req.body;
    const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl });

    newAuthor.save()
      .then( (book) => res.redirect('/books') )
      .catch( (err) => console.log(err));
  });


  module.exports = router;
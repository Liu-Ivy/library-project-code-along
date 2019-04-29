var express = require('express');
var router = express.Router();
const Book = require('./../models/book');


// GET '/books/add'
router.get('/add', function(req, res, next) {
  res.render('book-add');
});


// POST '/books/add'
router.post('/add', function(req, res, next) {
  console.log('req.body', req.body);
  const {title, author, description, rating} = req.body;

  const newBook = new Book({title, author, description, rating});

  newBook.save()
    .then( (book) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});

// GET '/books'
router.get('/', (req, res, next) => {
  Book.find({})
    .then( (allTheBooksFromDB) => res.render('books', {allTheBooksFromDB} ))
    .catch( (err) => console.log(err));
});

module.exports = router;

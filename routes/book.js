var express = require('express');
var router = express.Router();
const Book = require('../models/BookModel');


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

//  GET '/books/edit'
router.get('/edit', (req, res, next) => {
  const { _id } = req.query;

  Book.findOne({ _id })
    .then( (book) => res.render('books-edit', { book } ))
    .catch( (err) => console.log(err));
});

//  POST '/books/edit'
router.post('/edit', (req, res, next) => {
  const { _id } = req.query;
  const {title, author, description, rating} = req.body;

  Book.findOneAndUpdate( { _id }, { $set:  {title, author, description, rating} })
    .then( (book) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});



//  GET '/books/details/:bookId'
router.get('/details/:bookId', (req, res, next) => {
  const { bookId } = req.params;

  Book.findById( bookId )
    .populate('author') // Checks the `authors` collection and populates `Author` ref
    .then( (book) => res.render('book-details', { book } ))
    .catch( (err) => console.log(err));
});


// GET '/books'
router.get('/', (req, res, next) => {
  Book.find({})
    .then( (allTheBooksFromDB) => res.render('books', {allTheBooksFromDB} ))
    .catch( (err) => console.log(err));
});

module.exports = router;

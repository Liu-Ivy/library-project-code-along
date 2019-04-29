var express = require('express');
var router = express.Router();
const Book = require('../models/BookModel');

// POST '/reviews/add'
router.post('/add', (req, res, next) => {
  const { _id } = req.query;
  const { user, comments } = req.body;

  Book.updateOne(
    { _id },
    { $push : { reviews: {user, comments} } }
  )
  .then( (book) => res.redirect(`/books/details/${_id}`))
  .catch( (err) => console.log(err));


});

module.exports = router;
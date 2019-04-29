var express = require('express');
var router = express.Router();

const booksRouter = require('./book');
const authorRouter = require('./author');
const reviewsRouter = require('./reviews');

//  * '/books'
router.use('/books', booksRouter);


//  * '/authors'
router.use('/authors', authorRouter);

//  * '/reviews'
router.use('/reviews', reviewsRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

const booksRouter = require('./book');
const authorRouter = require('./author')

//  * '/books'
router.use('/books', booksRouter);


//  * '/authors'
router.use('/authors', authorRouter);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

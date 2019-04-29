var express = require('express');
var router = express.Router();
const Author = require('./../models/author');



// GET '/authors/add'
router.get('/add', (req, res, next) => {
  res.render('author-add')
});

// POST '/authors/add'
router.get('/add', (req, res, next) => {
  
});


module.exports = router;
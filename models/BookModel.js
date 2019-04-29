const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Author = require('./AuthorModel');
const reviewSchema = require('./schemas/reviewSchema');


const bookSchema = require('./schemas/bookSchema');
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
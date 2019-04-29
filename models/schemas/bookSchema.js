const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = require('./reviewSchema');

const bookSchema = new Schema({
  title: String,
  description: String,
  reviews: [reviewSchema],
  author: [ 
    { type: Schema.Types.ObjectId, ref: 'Author'} 
  ],
  rating: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


module.exports = bookSchema;
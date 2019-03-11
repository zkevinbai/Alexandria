const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true 
  },
  genre: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  },
  publishedDate: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: true 
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
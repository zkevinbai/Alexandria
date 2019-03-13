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
    type: String,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true 
  },
  reading: {
    type: Boolean,
    required: false
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
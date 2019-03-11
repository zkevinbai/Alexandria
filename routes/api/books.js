const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Book = require('../../models/Book');


router.get('/user/:userId', (req, res) => {
  Book.find({ user: req.params.userId})
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No books found for that user'}))
});

router.post('/user/:userId', passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    console.log(req.body);
    const newBook = new Book({
      user: req.params.userId,
      // title: req.body.volumeInfo.title,
      // author: req.body.volumeInfo.authors[0],
      // genre: req.body.volumeInfo.categories[0],
      // description: req.body.volumeInfo.description,
      // publishedDate: req.body.volumeInfo.publishedDate,
      // pageCount: req.body.volumeInfo.pageCount,
      // imageUrl: req.body.volumeInfo.imageLinks.thumbnail
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      description: req.body.description,
      publishedDate: req.body.publishedDate,
      pageCount: req.body.pageCount,
      imageUrl: req.body.imageUrl
    })
    newBook.save().then(book => res.json(book));
  })

router.delete('/user/:user_id', (req, res) => {
  const bookId = req.body.bookId;
  Book.findById( bookId )
  .then(book => {
    if(book){
      book.remove();
      return res.send('Book deleted');
    }
    else{
      return res.status(404).json({ booknotfound: 'book not found'})
    }
  })
    .catch(err => console.log(err));
})

module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Book = require('../../models/Book');


router.get('/user/:user_id', (req, res) => {
  Book.find({ user: req.params.user_id})
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No books found for that user'}))
});

router.post('/', passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    const newBook = new Book({
      user: req.body.volumeInfo.title,
      author: req.body.volumeInfo.authors[0],
      genre: req.body.volumeInfo.categories[0],
      description: req.body.volumeInfo.description,
      publishedDate: req.body.volumeInfo.publishedDate,
      pageCount: req.body.volumeInfo.pageCount,
      imageUrl: req.body.volumeInfo.imageLinks.thumbnail
    })
  })

router.get(`https://www.googleapis.com/books/v1/volumes?q={${searchparams}}`, (req, res) => {
  
})
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
      // user: 
      // author:
      // genre:
      // description:
      // publishedDate:
      // imageUrl:
    })
  })
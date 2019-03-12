# Alexandria

# Background and Overview
Alexandria is a book app.  We aim to help readers keep track of their books, and to help them discover new reads.

# Functionality
1. keep track of the books you have read
2. find great new books to read
3. learn about your reading interest
4. share your library

# MVP
* full user authentication
    * make accounts, login, logout
* books and book shelf
    * search for books via Google API
    * add books to book shelf
    * remove books from book shelf
* recommendations on books to read
    * dynamically generated from the books the user currently has in their library

# Technologies
* MERN stack
  * Mongo DB, Express, React, NodeJS
* Google books API
  * authenticated calls to the volumes API
* Git 
  * git workflow with master, dev, and feature branches

# Methodologies
* Standup
  * Team meetings every morning and afternoon, highs and lows, learn about eachother
* TDD
  * Test Driven Development, accounting for edge cases before production
* BEM
  * Block Element Modifier, clear, understandable, scalable CSS

# Team Objectives
  * learn to work as a team
  * learn the MERN stack
    * learn the MERN user auth pattern
  * learn git workflow and collaborate efficiently
  * learn and integrate the Google books API

# Group Members and Work Breakdown
**Kevin Bai** | **Sam O'Donnell** | **Corinne Hickey**
* Week 10 Day 1 Alexandria Backend
    * individual collaboration on user authentication
        * full user authentication with bcrypt encryption
        * protected and authenticated routes to determine what to render
    * complete backend of books to add books, show bookshelf, and remove books
    * complete integration of Google books api into local app
        * defined search action, and created a search reducer
        * defined custom parser for search results 
* Week 10 Day 2 - Alexandria Frontend

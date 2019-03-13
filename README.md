# Alexandria

# Background and Overview
Alexandria is a book app.  We aim to help readers keep track of their books, and to help them discover new reads.

# Functionality
1. keep track of the books you have read
2. find great new books to read
3. learn about the books you're reading
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
  * No Bad Ideas
      * every thought is valid, every idea is welcome
  * Democratic Decision Making
      * vote on new directions as a team
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
    * complete searchbar functionality
        * queries the googlebooks api with on enter
            * succeeded in building auto-search, but hit the free api limit
        * displays results in clean dropdown, in the same style as google
        * clears the query once the user deletes their search query
    * complete splash page
      * integrate search bar to demonstrate functionality
      * consistent and clear design philosophy
          * muted color theme in light of library theme
    * complete user auth components
        * modal signup and login
* Week 10 Day 3 - Alexandria Deployment

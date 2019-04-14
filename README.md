Alexandria <img src="https://github.com/zkevinbai/Alexandria/blob/master/frontend/public/Great_Library.png" alt="Alexandria Logo" align="center" height="50px" />
======

[Alexandria](https://alexandria-book.herokuapp.com/#/) is a book search engine and reading tracker designed by readers for readers.

We built this in 5 days time: March 11 - March 12 and April 2 - April 4 2019.  

Team Githubs:
* [Kevin](https://github.com/zkevinbai) 
* [Sam](https://github.com/sdodonnell) 
* [Corinne](https://github.com/chickey96) 

Technologies
---
* MERN stack
  * Mongo DB, Express, React, NodeJS
* Google Books API
  * authenticated calls to the volumes API for collections of books
  * authenticated calls to the book API for single books
* Amazon Affiliate API
  * link to amazon page for any given book returned by our search
* D3 
  * dynamic render of user book analyses
* Git 
  * git workflow with master, dev, and feature branches

Design
---
Alexandria was designed with the theme of a timeless library.  Muted colors, and a simple interface make books the focus of the application. 

Features
---
* full user authentication
    * create accounts, login, logout 
    * use JSON web token strategy to authenticate
    * automatic logout after a set period of inactivity
* book search engine
    * search for any book in the world using Google Books api
    * can handle searches for books in any language
    * can handle spelling mistakes in any language
* book buy now button
    * link to the exact book the using Amazon affiliate api
    * can handle books with the same title
    * can handle books which have yet to be released
* book library
    * add books to book shelf
    * remove books from book shelf
    * ability to sort books in library by date added, author, title, book length
* recommendations on books to read
    * dynamically generated from the books the user currently has in their library
    * see other books we think you would enjoy
    * also check out staff picks
* analysis on the book in library on books to read
    * dynamically generated from the books the user currently has in their library
    * see the genre percentage breakdown of the books you are reading

Feature GIFs
---
## Full User Authentication
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/0-userAuth.gif" align="center"/>

## Book Search Engine - Regular Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1-searchEngine.gif" align="center"/>

## Book Search Engine - Mispelled Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1.5-searchEngine.gif" align="center"/>

## Book Search Engine - Multilingual Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1.75-searchEngine.gif" align="center"/>

## Book Buy Button
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/2-bookBuy.gif" align="center"/>

## Book Library
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/3-bookLibrary.gif" align="center"/>

## Book Recommendations
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/4-bookRecommendations.gif" align="center"/>

## Book Analysis
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/5-bookAnalysis.png" align="center"/>

Code Snippets
---
## Search Bar Component

<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/code/searchBar.png" align="center"/>

## Search Response Parser

<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/code/bookParser.png" align="center"/>

## Book Sorting Algorithim

<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/code/bookSorting.png" align="center"/>

## D3 Visualization

<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/code/d3Chart.png" align="center"/>

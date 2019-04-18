# Alexandria <img src="https://github.com/zkevinbai/Alexandria/blob/master/frontend/public/Great_Library.png" alt="Alexandria Logo" align="center" height="50px" />

[Alexandria](https://alexandria-book.herokuapp.com/#/) is a book search engine and reading tracker designed by readers for readers.

We built this in 5 days time: March 11 - March 12 and April 2 - April 4 2019.  

Team Githubs:
* [Kevin](https://github.com/zkevinbai) 
* [Sam](https://github.com/sdodonnell) 
* [Corinne](https://github.com/chickey96) 

## Technologies
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

## Design
Alexandria was designed with the theme of a timeless library.  Muted colors, and a simple interface make books the focus of the application. 

## Features
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

## Feature GIFs
### Full User Authentication
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/0-userAuth.gif" align="center"/>


### Book Search Engine - Regular Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1-searchEngine.gif" align="center"/>


### Book Search Engine - Mispelled Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1.5-searchEngine.gif" align="center"/>


### Book Search Engine - Multilingual Search
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/1.75-searchEngine.gif" align="center"/>


### Book Buy Button
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/2-bookBuy.gif" align="center"/>


### Book Library
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/3-bookLibrary.gif" align="center"/>


### Book Recommendations
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/4-bookRecommendations.gif" align="center"/>


### Book Analysis
<img src="https://github.com/zkevinbai/Alexandria/blob/master/Assets/screenshots/features/5-bookAnalysis.png" align="center"/>


## Code Snippets
### Search Bar Component

```js
// frontend/src/components/search/searchBar.jsx

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryString: this.props.queryString
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.queryGoogleBooks(this.state.queryString)  
    }

    handleChange(e) {
        e.preventDefault();

        let queryString = e.target.value;
        
        if (queryString.length === 0) {
            this.props.clearSearch();
        } else {
            // comment this in to test auto search, but don't keep it
            // google needs money for prolonged search
            // this.props.queryGoogleBooks(queryString);
        }

        this.props.setQueryString(queryString);

        this.setState({
            queryString
        });


    }

    componentWillUnmount(){
        this.props.clearSearch();
    }

    render() {
            return (
            <div className="query">
                <form 
                    onSubmit={this.handleSubmit}
                    className="query-form"  
                >
                    <span className="searchbar">
                            <i className="fas fa-search"></i>
                        <input 
                            className="query-form-input"
                            onChange={this.handleChange}
                            type="text" 
                            value={this.props.queryString}
                            placeholder="Search for a book" 
                        />
                        <input 
                            type="submit"
                            className="query-form-submit"
                        />
                    </span>
                    
                </form>
                <SearchBarDropdownContainer queryResults={this.props.searchResults} />
            </div>
            )
    }
}
```

### Search Response Parser

```js
// frontend/src/util/searchParseUtil.js

export const parseBook = bookResult => {
  let book = {};
  if(!bookResult.volumeInfo || !bookResult.volumeInfo.title){
    return book;
  }

  book.user = null;
  book.title = bookResult.volumeInfo.title;
  book.volumeId = bookResult.id;

  if (bookResult.volumeInfo.authors) {
    book.author = bookResult.volumeInfo.authors[0];
  } else {
    book.author = 'Unknown Author';
  }
  
  if (bookResult.volumeInfo.categories){
    book.genre = bookResult.volumeInfo.categories[0];
  } else{
    book.genre = 'Fiction';
  }
  
  if (bookResult.volumeInfo.description){
    book.description = bookResult.volumeInfo.description;
  } else{
    book.description = 'A great read!';
  }
  
  if (bookResult.volumeInfo.publishedDate) {
    book.publishedDate = bookResult.volumeInfo.publishedDate;
  } else {
    book.publishedDate = 'Unknown';
  }
  
  if (bookResult.volumeInfo.pageCount) {
    book.pageCount = bookResult.volumeInfo.pageCount;
  } else {
    book.pageCount = 'Unknown';
  }
  
  if (bookResult.volumeInfo.imageLinks) {
    if(bookResult.volumeInfo.imageLinks.thumbnail){
      book.imageUrl = bookResult.volumeInfo.imageLinks.thumbnail;
    } else if (bookResult.volumeInfo.imageLinks.smallThumbnail){
      book.imageUrl = bookResult.volumeInfo.imageLinks.smallThumbnail;
    }
  } else {
    book.imageUrl = 'https://cdn.pixabay.com/photo/2016/03/31/18/29/book-1294406_960_720.png';
  }

  return book;
};

```
### Book Sorting Algorithim

```js
// frontend/src/components/books/booksIndex.jsx

renderBooks() {
        let books = Object.values(this.props.books)
        switch(this.state.sort) {
            case 'date':
                books.reverse();
                break;
            case 'title':
                books.sort((a, b) => {
                    if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1;
                    return
                })
                break;
            case 'author':
                books.sort((a, b) => {
                    if (a.author < b.author) return -1;
                    if (a.author > b.author) return 1;
                    return
                })
                break;
            case 'genre':
                books.sort((a, b) => {
                    if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1;
                    return
                })
                break;
            case 'length-stl':
                books.sort((a, b) => {
                    return a.pageCount - b.pageCount
                })
                break;
            case 'length-lts':
                books.sort((a, b) => {
                    return b.pageCount - a.pageCount
                })
                break;
            default:
                break;
        }

        switch (this.state.display) {
            case "grid":
              return books.map((book, i) => <BooksIndexItemGrid key={i} userId={this.props.userId} book={book}/>)
            case "list":
              let booksList = books.map((book, i) => <BooksIndexItemList key={i} userId={this.props.userId} book={book}/>)
              booksList.unshift(
                <div className="books-index-list-toolbar">
                    <div></div>
                    <p>Title</p>
                    <p>Author</p>
                    <p>Genre</p>
                    <p>Page Count</p>
                    <p>Description</p>
                </div>
              )
              return booksList
        }
    }
```
    
## D3 Visualization

```js
// frontend/src/components/graphs/graph.jsx

  makeChart(){
    d3.selectAll("svg").remove();
    const colorScale = d3.scaleOrdinal(d3.schemePaired);
    const data = this.getGenreArray();
    const r = 250; // outer radius 
    //put pie chart in graph div from books index
    const svg = d3.select(".graph").append("svg")
      .attr("width", 1200)
      .attr("height", 600)
      .attr('viewBox', '-650 -300 1300 600');

    const group = svg.append("g")

    const arc = d3.arc()
      // .innerRadius(0)//makes a closed pie chart
      .innerRadius(120)//makes a donut chart
      .outerRadius(r);

    const outerArc = d3.arc()
      .outerRadius(r * 0.9)
      .innerRadius(r * 0.9);

    const pie = d3.pie()
      .value(function (d) { 
        return d; }); 

    const arcs = group.selectAll(".arc")
      .data(pie(data.value))
      .enter()
      .append("g")
      .attr("class", "arc");
      
      arcs.append("path")
      .attr("d", arc) 
      .attr("fill", function (d, i) { return colorScale(i); })
      .attr("opacity", "0.85");
    
    //add own elements for text so data doesn't cover it
    const labels = group.selectAll(".arc2")
      .data(pie(data.value))
      .enter()
      .append('g')
      .attr('class', 'labels');


    // Code for labels based on Michael Hall's at https://bl.ocks.org/mbhall88/b2504f8f3e384de4ff2b9dfa60f325e2
    labels.append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", "1em")
      .attr("font-family", "Source Sans Pro")
      .attr("font-weight", "500")
      .text( function (d, i) { 
        return data.label[i]; })
      .attr('dy', '.35em')
      .attr('transform', function(d) {

          // effectively computes the centre of the slice.
          // see https://github.com/d3/d3-shape/blob/master/README.md#arc_centroid
          var pos = outerArc.centroid(d);

          // changes the point to be on left or right depending on where label is.
          pos[0] = r * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
          return 'translate(' + pos + ')';
      })
      .style('text-anchor', function(d) {
          // if slice centre is on the left, anchor text to start, otherwise anchor to end
          return (midAngle(d)) < Math.PI ? 'start' : 'end';
      });

    const lines = group.append('g').attr('class', 'lines')

    const polyline = lines.selectAll('polyline')
      .data(pie(data.value))
      .enter().append('polyline')
      .attr('stroke','black')
      .attr('fill', 'none')
      .attr('points', function(d) {

          // see label transform function for explanations of these three lines.
          var pos = outerArc.centroid(d);
          pos[0] = r * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
          return [arc.centroid(d), outerArc.centroid(d), pos]
      });

      function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

  }
```

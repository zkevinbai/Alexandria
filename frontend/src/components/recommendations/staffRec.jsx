import React from 'react';
import { queryBook } from '../../util/bookApiUtil';
import { parseBook } from '../../util/searchParseUtil';
import RecItem from './recItem';

class StaffRec extends React.Component {
  constructor(props) {
    super(props);
    this.bookIds = [
      // "Don Quixote"
      "_A62JbwvXeYC",
      // "Foundation"
      "IwywDY4P6gsC",
      // "Dawn"
      "f39gNO_ZqOQC",
      // "Cat's Cradle"
      "OQ4PAQAAMAAJ",
      // "Candide"
      "Q-hkmgm1kSkC",
      // "The Brothers Karamazov"
      "Op86DAAAQBAJ",
      // "One Hundred Years of Solitude"
      "Fkw-PgAACAAJ",
      // "A Game of Thrones"
      "hXNvadj27ekC",
      // "Hard-Boiled Wonderland and the End of the World"
      "BgruFujfHF8C",
      // "The Sound and the Fury"
      "_luMDQAAQBAJ"
    ]
    this.getAPICall = this.getAPICall.bind(this);
    this.handleAPICall = this.handleAPICall.bind(this);
    this.booksReceived = 0;
    this.books = [];
    this.state = { bookRecs: [] }
  }

  componentDidMount(){
    this.bookIds.forEach( bookId => {
      this.getAPICall(bookId)
    })
  }

  getAPICall(bookId){
    queryBook(bookId)
      .then(res => this.handleAPICall(parseBook(res)))
  }

  handleAPICall(book){
    this.books.push(book)
    this.booksReceived += 1;
    if(this.booksReceived === 10){
      const bookRecs = this.books;
      this.setState({
        bookRecs: bookRecs
      })
    }
  }

  renderRecs(bookRecs){
    return bookRecs.map((rec, i) => <RecItem key={i} book={rec} />)
  }

  render(){
    if(this.state.bookRecs.length < 10){
      return null;
    }
    return(
      <div className = "books-index-wrapper">
        {this.renderRecs(this.state.bookRecs)}
      </div>
    )
  }

}

export default StaffRec;
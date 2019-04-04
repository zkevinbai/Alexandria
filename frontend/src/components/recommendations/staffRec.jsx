import React from 'react';
import { getBooks } from '../../util/bookApiUtil';
import RecItem from './recItem';
// import './recommendations.css';

class StaffRec extends React.Component {
  constructor(props) {
    super(props);
    this.recsId = "5ca536c65eedc9284b03a839";
    this.booksReceived = false;
    this.state = { bookRecs: [] }
    this.parseBooks = this.parseBooks.bind(this);
    this.siftUserBooksByTitle = this.siftUserBooksByTitle.bind(this);

  }

  componentDidMount(){
    getBooks(this.recsId)
      .then( res => this.parseBooks(res))
  }

  parseBooks(res){
    this.booksReceived = true;
    const books = Object.values(res.data);
    this.setState({ bookRecs: books })
  }

  siftUserBooksByTitle(){
    let uBooks = Object.values(this.props.userBooks);

    let titles = [];

    uBooks.forEach( bookHash => titles.push(bookHash.title) );

    return titles;
  }

  renderRecs(bookRecs){
    let userBookTitles = this.siftUserBooksByTitle();
    return bookRecs.map((rec, i) => {
      return <RecItem key={i} book={rec} isUserBook={userBookTitles.includes(rec.title)} path="bookrec"/>
    })
  }

  render(){
    if(!this.booksReceived){
      return null;
    }

    return(
      <div className="recs-container">
        <div>
          {this.renderRecs(this.state.bookRecs)}
        </div>
      </div>
    )
  }

}

export default StaffRec;
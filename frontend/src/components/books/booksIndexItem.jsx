import React, {Component} from 'react';
// import BookHover from './BookHover';
import {withRouter, Link} from 'react-router-dom';
class BooksIndexItem extends Component {

  render(){
    return (
      <Link to={`/books/${this.props.book._id}`} >
        <div className="books-index-item">
          <img src={this.props.book.imageUrl} alt=""/>
          {/* <BookHover book={props.book}/> */}
        </div>
      </Link>
  )}
}

export default withRouter(BooksIndexItem);

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class RecItem extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    if(!this.props.book){
      return null;
    }

    let classVal;
    if (this.props.book.imageUrl === 'https://cdn.pixabay.com/photo/2016/03/31/18/29/book-1294406_960_720.png') {
      classVal = "default-book";
    }

    let divClassVal;

    if (this.props.isUserBook) {
      divClassVal = "staff-book";
    }

    let bookId = null;
    if(this.props.book._id){
      bookId = this.props.book._id;
    } else {
      bookId = this.props.book.volumeId;
    }

    const path = this.props.path;
   
    return (
      <Link to={`${this.props.match.url}/${path}/${bookId}`} book={this.props.book}>
        <div className={"books-index-item-grid " + divClassVal}>
          <img src={this.props.book.imageUrl}  className={classVal} alt="" />
        </div>
      </Link>
    )
  }
}

export default withRouter(RecItem);
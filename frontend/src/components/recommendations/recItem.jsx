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
    if (this.props.book.imageUrl === 'https://openclipart.org/image/2400px/svg_to_png/211628/Book_thick_generic.png') {
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
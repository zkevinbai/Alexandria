import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { isStaffBook } from '../../util/componentUtils/bookIndexItemUtil';
class BooksIndexItem extends Component {

  render(){
    let classVal;
    if (this.props.book.imageUrl === 'https://openclipart.org/image/2400px/svg_to_png/211628/Book_thick_generic.png') {
      classVal = "default-book";
    }

    let divClassVal;

    if (isStaffBook(this.props.book.title)) {
      divClassVal = "staff-book-grid";
    }

    return (
      <Link to={`/shelf/${this.props.userId}/books/${this.props.book._id}`} >
        <div className={"books-index-item-grid " + divClassVal }>
          <img src={this.props.book.imageUrl} className={classVal} alt=""/>
        </div>
      </Link>
  )}
}

export default withRouter(BooksIndexItem);

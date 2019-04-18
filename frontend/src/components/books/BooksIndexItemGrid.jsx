import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { isStaffBook } from '../../util/componentUtils/bookIndexItemUtil';
class BooksIndexItem extends Component {

  render(){
    let classVal;
    if (this.props.book.imageUrl === 'https://cdn.pixabay.com/photo/2016/03/31/18/29/book-1294406_960_720.png') {
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

import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { isStaffBook } from '../../util/componentUtils/bookIndexItemUtil';
class BooksIndexItem extends Component {

  render(){
    let classVal;
    if (this.props.book.imageUrl === 'https://github.com/zkevinbai/Alexandria/blob/master/Assets/defaultBook.png?raw=true') {
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

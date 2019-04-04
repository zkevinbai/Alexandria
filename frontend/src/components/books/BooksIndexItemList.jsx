import React from 'react';
import { Link } from 'react-router-dom'
import { isStaffBook } from '../../util/componentUtils/bookIndexItemUtil';

const BooksIndexItemList = props => {
  let classVal;
  if (props.book.imageUrl === 'https://openclipart.org/image/2400px/svg_to_png/211628/Book_thick_generic.png') {
    classVal = "default-book";
  }

  let divClassVal;

  if (isStaffBook(props.book.title) ) {
    divClassVal = "staff-book-list";
  }

  return (
    <Link to={`/shelf/${props.userId}/books/${props.book._id}`} >
      <div className={"books-index-item-list " + divClassVal }>
        <img src={props.book.imageUrl} className={classVal} alt=""/>
        <p>{props.book.title}</p>
        <p>{props.book.author}</p>
        <p>{props.book.genre}</p>
        <p>{props.book.pageCount}</p>
        <p>{props.book.description.slice(0, 100)}...</p>
      </div>
    </Link> 
  )
}

export default BooksIndexItemList
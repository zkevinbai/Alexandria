import React from 'react';
import { Link } from 'react-router-dom'

const BooksIndexItemList = props => {
  return (
    <Link to={`/shelf/${props.userId}/books/${props.book._id}`} >
      <div className="books-index-item-list">
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
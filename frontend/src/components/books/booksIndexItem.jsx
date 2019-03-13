import React from 'react';
import BookHover from './BookHover';

export default function BooksIndexItem(props) {
  return (
    <div className="books-index-item">
      <img src={props.book.imageUrl} alt=""/>
      <BookHover book={props.book}/>
    </div>
  )
}

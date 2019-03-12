import React from 'react'

export default function BooksIndexItem(props) {
  return (
    <div className="books-index-item">
      <img src={props.book.imageUrl} alt=""/>
      {props.book.title}
      {props.book.author}
    </div>
  )
}

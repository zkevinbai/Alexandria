import React from 'react'

export default function booksIndexItem(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      {props.book.title}
      {props.book.author}
    </div>
  )
}

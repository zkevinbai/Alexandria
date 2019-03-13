import React, { Component } from 'react'

export default class BookHover extends Component {
  render() {
    return (
      <div>
        <div
          className="book-show-heading-text"
        >
          <h1>{this.props.book.title}</h1>
          <h1>{this.props.book.author}</h1>
        </div>

        <div
          className="book-show-info-text"
        >
          <h1>Published: {this.props.book.publishedDate}</h1>
          <h1>Genre: {this.props.book.genre}</h1>
          <h1>PageCount: {this.props.book.pageCount}</h1>
        </div>

        <p
          className="book-show-description-text"
        >
          {this.props.book.description}
        </p>
      </div>
    )
  }
}

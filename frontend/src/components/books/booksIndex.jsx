import React, { Component } from 'react'
import BooksIndexItem from './booksIndexItem';
import './booksIndex.css'

export default class BooksIndex extends Component {
  
    componentDidMount() {
        this.props.fetchUserBooks(this.props.userId)
    }

    renderBooks() {
        return Object.values(this.props.books).map(book => <BooksIndexItem key={book.id} book={book}/>)
    }

    render() {
        if (this.props.books) {
            return (
            <div className="books-index-wrapper">
                {this.renderBooks()}
            </div>
            )
        } else return <div></div>
    }
}


import React, { Component } from 'react'
import booksIndexItem from './booksIndexItem';

export default class booksIndex extends Component {
  
    componentDidMount() {
        this.props.fetchUserBooks
    }

    render() {
        if (this.props.books) {
            return (
            <div className="books-index-wrapper">
                <ul>
                {
                    Object.values(this.props.books).map(book => {
                        <booksIndexItem key={book.id} book={book}/>
                    })
                }
                </ul>
            </div>
            )
        } else return <div></div>
    }
}


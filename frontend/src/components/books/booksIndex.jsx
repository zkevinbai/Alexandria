import React, { Component } from 'react'
import BooksIndexItem from './booksIndexItem';

export default class BooksIndex extends Component {
  
    componentDidMount() {
        this.props.fetchUserBooks()
    }

    renderBooks() {
        return Object.values(this.props.books).map(book => <BooksIndexItem key={book.id} book={book}/>)
    }

    render() {
        if (this.props.books) {
            return (
            <div className="books-index-wrapper">
                <BooksIndexItem 
                    book={{
                        author: "Homer",
                        title: "The Odyssey",
                        imageUrl: "https://books.google.com/books/content?id=PpJYDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }}/>
                <BooksIndexItem 
                    book={{
                        author: "Virgil",
                        title: "The Aeneid",
                        imageUrl: "https://books.google.com/books/content?id=eL0mAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    }}/>
                {this.renderBooks()}
            </div>
            )
        } else return <div></div>
    }
}


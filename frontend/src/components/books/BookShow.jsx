import React, { Component } from 'react';

export default class BookShow extends Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchBook(this.props.bookId)
      .then(book => (this.props.book = book))
      .catch(err => console.log(err))
  }

  handleAdd(){
    const data = {userId: this.props.currentUserId, book: this.props.book}
    this.props.addBook(data);
    this.props.history.replace(`/shelf/${this.props.currentUserId}`);
  }

  handleDelete(){
    this.props.deleteBook(this.props.bookId);
    this.props.history.replace(`/shelf/${this.props.currentUserId}`);
  }

  render () {
    if(!this.props.book){
      return null;
    }
    
    const userActionButtons = (
          this.props.currentUserId ? 
            (
              this.props.onShelf ? (
                <button className="delete-book-button" onClick={this.handleDelete}>
                  Delete Book
                </button>
                ) : ( 
                <button className="add-book-button" onClick={this.handleAdd}>
                  Add Book
                </button>
                ) 
            ) : (
                <div></div>
                )
    );

    return (
      <div className="show-page">
        <div>
          <img src={this.props.book.imageUrl} alt=""/>
        </div>
        <div>
          {userActionButtons}
        </div>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.author}</div>
        <div>Published: {this.props.book.publishedDate}</div>
        <div>Genre: {this.props.book.genre}</div>
        <div>PageCount: {this.props.book.pageCount}</div>
        <div>Description: {this.props.book.description}</div>
      </div>
    )

  }
}
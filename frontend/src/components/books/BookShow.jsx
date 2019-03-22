import React, { Component } from 'react';
import './bookShow.css';

export default class BookShow extends Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.back = this.back.bind(this);
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

  back(){
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
                <button className="delete-button" onClick={this.handleDelete}>
                  Delete Book
                </button>
                ) : ( 
                <button className="add-button" onClick={this.handleAdd}>
                  Add Book
                </button>
                ) 
            ) : (
                <div></div>
                )
    );

    return (
      <>
      <div className="show-page-wrapper">
        <div className="show-page-book-image">
          <img src={this.props.book.imageUrl} alt=""/>
        </div>
        <div className="show-page-buttons">
          {userActionButtons}
          <button className="back-button" onClick={this.back}>
            Back to Bookshelf 
          </button>
        </div>
        <div>
          <h3>Title</h3>
          {this.props.book.title}
        </div>
        <div>
          <h3>Author</h3>
          {this.props.book.author}
        </div>
        <div>
          <h3>Published</h3>
          {this.props.book.publishedDate}
        </div>
        <div>
          <h3>Genre</h3>
          {this.props.book.genre}
        </div>
        <div>
          <h3>Page Count</h3>
          {this.props.book.pageCount}
        </div>
        <div className="show-page-description">
          {this.props.book.description}
        </div>
      </div>
      </>
    )

  }
}
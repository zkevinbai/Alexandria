import React, { Component } from 'react';
import './bookShowModal.css';
import bookBuy from '../bookBuy/bookBuyComponent';
import { fetchBook } from '../../../util/bookApiUtil';

export default class BookShowModal extends Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.receiveBook = this.receiveBook.bind(this)
        this.state = { book: null }
    }

    componentDidMount(){
        if(this.props.isRec){
            fetchBook(this.props.bookId)
                .then(book => this.receiveBook(book))
        } else if (this.props.actionType === "deleteBook") {
            this.props.fetchBook(this.props.bookId)
        } else if (this.props.actionType === "addBook" || this.props.modalType === "publicBookShow" )  {
            this.props.queryGoogleBook(this.props.match.params.volumeId)
        }
    }

    receiveBook(res){
        this.setState({ book: res.data})
    }

    handleClick() {
        let book = this.props.book;
        if(!book){
            book = this.state.book;
            book.user = null;
        }
        book.description = book.description.replace(/<(?:.|\n)*?>/gm, '');
        if (this.props.actionType === "addBook") {
            this.props.addUserBook ({
                userId: this.props.userId, 
                book
            })
        } else {
            this.props.removeUserBook(book._id)
        }
        this.props.history.push(`/shelf/${this.props.match.params.userId}`)
        window.scrollTo(0, 0);
    }

    renderButton() {
        if (this.props.actionType === "addBook") {
            return (
                <button className="book-show-modal-button" onClick={this.handleClick}>
                    Add book to shelf
                </button>
            )
        } else if (this.props.actionType === "deleteBook") {
            return (
                <button className="book-show-modal-button" onClick={this.handleClick}>
                    Remove book from shelf
                </button>
            )
        }
        else return <div></div>
    }

    render() {
        let book = this.state.book;
        if(!book){
            book = this.props.book;
        }
        if (!book) return <div></div>;
        let description;
        (book.description) ? description = book.description : description = "";
        return (
            <div className="book-show-wrapper">
                <div className="book-show-content">
                    <div className="book-show-headline">                
                    <h1>{book.title}</h1>
                    <i 
                        className="fas fa-times"
                        onClick={() => this.props.history.goBack()}
                    ></i>
                    </div>
                    <div className="book-show-head">
                        <img src={book.imageUrl} />
                        <div className="book-show-header">
                            <div className="book-show-info-text">
                                <h3>Author</h3>
                                <h2>{book.author}</h2>
                                <h3>Date Published</h3>
                                <h2>{book.publishedDate}</h2>
                                <h3>Genre</h3>
                                <h2>{book.genre}</h2>
                                <h3>Page Count</h3>
                                <h2>{book.pageCount}</h2>
                                {this.renderButton()}
                                {bookBuy(book.title, book.author)}
                            </div>
                        </div>
                    </div>
    
                    <p className="book-show-description-text">
                        {description.replace(/<(?:.|\n)*?>/gm, '')}
                    </p>

                </div>
            </div>
        )
    }
}

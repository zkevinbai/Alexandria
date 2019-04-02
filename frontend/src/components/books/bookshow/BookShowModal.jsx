import React, { Component } from 'react';
import './bookShowModal.css';

export default class BookShowModal extends Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.queryGoogleBook(this.props.match.params.volumeId)
    }

    handleClick() {
        this.props.addUserBook({
            userId: this.props.userId, 
            book: this.props.book
        })
    }

    renderButton() {
        if (this.props.modalType === "userBookShow") {
            return (
                <button onClick={this.handleClick}>
                    Add book to shelf
                </button>
            )
        } else return <div></div>
    }

    render() {
            return (
            <div className="book-show-wrapper">
                <div className="book-show-content">
                    <div className="book-show-headline">                
                    <h1>{this.props.book.title}</h1>
                    <i 
                        className="fas fa-times"
                        onClick={() => this.props.history.goBack()}
                    ></i>
                    </div>
                    <div className="book-show-head">
                        <img src={this.props.book.imageUrl} />
                        <div className="book-show-header">
                            <div className="book-show-info-text">
                                <h3>Author</h3>
                                <h2>{this.props.book.author}</h2>
                                <h3>Date Published</h3>
                                <h2>{this.props.book.publishedDate}</h2>
                                <h3>Genre</h3>
                                <h2>{this.props.book.genre}</h2>
                                <h3>Page Count</h3>
                                <h2>{this.props.book.pageCount}</h2>
                                {this.renderButton()}
                            </div>
                        </div>
                    </div>
    
                    <div className="book-show-description-text">
                        {this.props.book.description}                    
                    </div>
                </div>
            </div>
            )
        }
}

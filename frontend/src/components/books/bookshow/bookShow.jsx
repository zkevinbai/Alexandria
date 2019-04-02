import React, { Component } from 'react';
import './bookShow.css';

export default class bookShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.queryGoogleBook(this.props.match.params.volumeId)
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
                        <div className="book-show-heading-text">
                        </div>

                        <div className="book-show-info-text">
                            <h3>Author</h3>
                            <h2>{this.props.book.author}</h2>
                            <h3>Date Published</h3>
                            <h2>{this.props.book.publishedDate}</h2>
                            <h3>Genre</h3>
                            <h2>{this.props.book.genre}</h2>
                            <h3>Page Count</h3>
                            <h2>{this.props.book.pageCount}</h2>
                        </div>
                    </div>
                </div>

                <p className="book-show-description-text">
                    {this.props.book.description}
                </p>
            </div>
        </div>
        )
    }
}

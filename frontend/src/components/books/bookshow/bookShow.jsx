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
        debugger
        return (
        <div className="book-show">
            {
                this.props.book.imageLinks ? 
                    <img src={this.props.book.imageUrl} />
                :
                    <img src="" />
            }
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

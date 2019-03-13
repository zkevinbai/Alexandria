import React, {Component} from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import BookPublicShowContainer from '../../books/bookshow/bookPublicShowContainer';
import BookUserNewShowContainer from '../../books/bookshow/bookUserNewShowContainer';
export default class searchBarDropdownItem extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
        this.publicShow = this.publicShow.bind(this);
        this.userNew = this.userNew.bind(this);
    }

    handleClick(book) {
        return (e) => {
            this.props.addUserBook({
                userId: this.props.userId,
                book
            }).then(
                this.props.clearSearch()
            )
        };
    }

    publicShow(){
        return(
        <Link
            className="query-dropdown-index-item"
            to={`book/${this.props.book.volumeId}`}
        >
            <img src={this.props.book.imageUrl} />
            <div
                className="query-dropdown-index-item-text"
            >
                <h1
                    className="query-dropdown-index-item-title"
                >
                    {this.props.book.title.slice(0, 50)}
                </h1>

                <h1
                    className="query-dropdown-index-item-author"
                >
                    {this.props.book.author}
                </h1>
            </div>
        </Link>
    )}

    userNew(){
        return(
        <Link
            className="query-dropdown-index-item"
            to={`shelf/${this.props.userId}/book/${this.props.book.volumeId}`}
        >
            <img src={this.props.book.imageUrl} />
            <div
                className="query-dropdown-index-item-text"
            >
                <h1
                    className="query-dropdown-index-item-title"
                >
                    {this.props.book.title.slice(0, 50)}
                </h1>

                <h1
                    className="query-dropdown-index-item-author"
                >
                    {this.props.book.author}
                </h1>
            </div>
        </Link>
    )}


    render() {
        if(this.props.modalType === "public"){
            return this.publicShow()
        } else if (this.props.modalType === "userNew"){
            return(
                <div
                    className="query-dropdown-index-item"
                    onClick={this.handleClick(this.props.book)}
                >
                    <img src={this.props.book.imageUrl} />
                    <div
                        className="query-dropdown-index-item-text"
                    >
                        <h1
                            className="query-dropdown-index-item-title"
                        >
                            {this.props.book.title.slice(0, 50)}
                        </h1>

                        <h1
                            className="query-dropdown-index-item-author"
                        >
                            {this.props.book.author}
                        </h1>
                    </div>
                </div>
            )
        }
    }
}

// return this.userNew() add this in when userNew is complete


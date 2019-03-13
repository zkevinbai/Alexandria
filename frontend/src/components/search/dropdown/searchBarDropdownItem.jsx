import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import BookPublicShowContainer from '../../books/bookshow/bookPublicShowContainer';
import BookUserNewShowContainer from '../../books/bookshow/bookUserNewShowContainer';
export default class searchBarDropdownItem extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
        // this.whichModal = this.whichModal.bind(this);
    }

    // handleClick(book) {
    //     return (e) => {
    //         this.props.addUserBook({
    //             userId: this.props.userId,
    //             book
    //         });
    //     };
    // }
    handleClick(book) {
        return (e) => {
            this.props.addUserBook({
                userId: this.props.userId,
                book
            }).then(this.props.clearSearch())
        };
    }

    render() {
        return (
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
                        {this.props.book.title.slice(0,50)}
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

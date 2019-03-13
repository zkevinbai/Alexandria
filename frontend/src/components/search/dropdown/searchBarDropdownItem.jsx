import React, {Component} from 'react';
import BookPublicShowContainer from '../../books/bookshow/bookPublicShowContainer';
import BookUserNewShowContainer from '../../books/bookshow/bookUserNewShowContainer';
export default class searchBarDropdownItem extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(book) {
        return (e) => {
            this.props.addUserBook({
                userId: this.props.userId,
                book
            });
        };
    }
    
    publicBookShowModal(book){
        return < BookPublicShowContainer book={book} />
    }

    userBookNewShowModal(book){
        return < BookUserNewShowContainer book={book} />
    }

    whichModa(){
        if (this.props.modalType === "public") {
            return this.publicBookShowModal;
        } else if (this.props.modalType === "new") {
            return this.userBookNewShowModal;
        }
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
                    <h1>{this.props.book.title.slice(0,75)}</h1>
                    <h1>{this.props.book.author}</h1>
                </div>
            </div>
        )
    }
}

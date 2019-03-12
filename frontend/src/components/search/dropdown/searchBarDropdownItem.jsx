import React, {Component} from 'react';

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

    render() {
        return (
            <div
                className="query-dropdown-index-item"
                onClick={this.handleClick(this.props.book)}
            >
                <img src={this.props.book.imageUrl} />
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.description.slice(0,100) + '...'}</p>
            </div>
        )
    }
}

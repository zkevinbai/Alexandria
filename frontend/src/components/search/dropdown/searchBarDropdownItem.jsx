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
        debugger
        return (
            <div
                className="query-dropdown-index-item"
                onClick={this.handleClick(this.props.book)}
            >
                <img src={this.props.book.imageUrl} />
                <h1>{this.props.book.title}</h1>
            </div>
        )
    }
}

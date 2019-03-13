import React, { Component } from 'react';
import SearchBarDropdownItem from './searchBarDropdownItem';
import './searchBarDropdown.css';

export default class searchBarDropdown extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        if (this.props.queryResults){
          
        return (
        <div className="query-dropdown-index" >
            {this.props.queryResults.map( book => (
                <SearchBarDropdownItem 
                    book={book} 
                    key={book.id}
                    userId={this.props.userId}
                    addUserBook={this.props.addUserBook}
                    modalType={this.props.modalType}
                    clearSearch={this.props.clearSearch}
                />
            )
            )}
        </div>
        )
        } else {
            return(
                <div></div>
            )
        }
    }
}

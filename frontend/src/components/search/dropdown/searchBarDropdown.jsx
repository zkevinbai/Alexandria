import React, { Component } from 'react';
import SearchBarDropdownItem from './searchBarDropdownItem';

export default class searchBarDropdown extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
        <div className="query-dropdown-index" >
            {this.props.queryResults.map( book => (
                <SearchBarDropdownItem 
                    book={book} 
                    key={book.id}
                />
            )
            )}
        </div>
        )
    }
}

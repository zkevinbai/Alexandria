import React, { Component } from 'react';
import SearchBarDropdown from './dropdown/searchBarDropdown';

export default class searchBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            queryResults: this.props.searchResults,
            queryString: ""
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(field) {
        return (e) => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    render() {
        return (
        <div className="query">
            <form 
                onSubmit={this.handleSubmit}
                className="query-form"  
            >
                <span className="searchbar">
                    <input 
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="Search for any book" 
                    />

                    <input 
                        className="fas fa-search"
                        type="submit" 
                    />
                </span>
                
            </form>

            <SearchBarDropdown />
        </div>
        )
    }
}

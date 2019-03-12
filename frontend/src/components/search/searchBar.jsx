import React, { Component } from 'react';
import SearchBarDropdownContainer from './dropdown/searchBarDropdownContainer';
import './searchBar.css';
export default class searchBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            queryString: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.queryGoogleBooks(this.state.queryString);
    }

    handleChange(e) {
        e.preventDefault();

        let queryString = e.target.value;

        this.setState({
            queryString
        });
    }

    render() {
        return (
        <div className="query">
            <form 
                onSubmit={this.handleSubmit}
                className="query-form"  
            >
                <span className="searchbar">
                        <i class="fas fa-search"></i>
                    <input 
                        className="query-form-input"
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="Search for any book" 
                    />
                    <input 
                        type="submit"
                        className="query-form-submit"
                    />
                </span>
                
            </form>

            <SearchBarDropdownContainer queryResults={this.props.searchResults} />
        </div>
        )
    }
}

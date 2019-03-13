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
        
        if (queryString.length === 0) {
            this.props.clearSearch();
        } else {
            // comment this in to test auto search, but don't keep it
            // google needs money for prolonged search
            // this.props.queryGoogleBooks(queryString);
        }

        this.setState({
            queryString
        });
    }

    componentWillUnmount(){
        this.props.clearSearch();
    }

    render() {
        return (
        <div className="query">
            <form 
                onSubmit={this.handleSubmit}
                className="query-form"  
            >
                <span className="searchbar">
                        <i className="fas fa-search"></i>
                    <input 
                        className="query-form-input"
                        onChange={this.handleChange}
                        type="text" 
                        value={this.state.queryString}
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

import React, { Component } from 'react';
import BooksIndexItem from './booksIndexItem';
import './booksIndex.css'
import Graph from '../graphs/graph';


export default class BooksIndex extends Component {
  
    componentDidMount() {
        window.scrollTo(0, 0);
        if(this.props.books.length === 0){
            this.props.fetchUserBooks(this.props.userId)
        }
    }

    componentDidUpdate(prevProps) {
        if(Object.keys(prevProps.books).length !== Object.keys(this.props.books).length){
            this.props.fetchUserBooks(this.props.userId)
        }
    }

    renderBooks() {
        return Object.values(this.props.books).map((book, i) => <BooksIndexItem key={i} book={book}/>)
    }

    render() {
        //only return the graph if books are loaded in state
        if(this.props.books && this.props.books.length > 1) {
            return (
              <div className='book-shelf'>
                <div className="books-index-wrapper">
                    {this.renderBooks()}
                </div>
                <div className='graph'>
                    <div className= "graph-label">Your Books by Genre</div>
                    <Graph books={this.props.books} />
                </div>
              </div>
            )
        }
        // if (this.props.books) {
        //     return (
        //         <div className='book-shelf'>
        //             <div className="books-index-wrapper">
        //                 {this.renderBooks()}
        //             </div>
        //         </div>
        //     )
        // }
         else return <div></div>
    }
}


import React, { Component } from 'react';
import BooksIndexItem from './booksIndexItem';
import BookUserShowContainer from '../books/bookshow/bookUserShowContainer';
import './booksIndex.css'
import Graph from '../graphs/graph';


export default class BooksIndex extends Component {
  
    componentDidMount() {
        this.props.fetchUserBooks(this.props.userId)
        debugger;
    }

    componentDidUpdate(prevProps) {
        if(Object.keys(prevProps.books).length !== Object.keys(this.props.books).length){
            this.props.fetchUserBooks(this.props.userId)
        }
        debugger;
    }

    renderBooks() {
        debugger;
        return Object.values(this.props.books).map(book => <BooksIndexItem key={book.id} book={book}/>)
    }

    userBookShowModal(book){
        return < BookUserShowContainer book={book} /> 
    }

    render() {
        //only return the graph if books are loaded in state
        debugger;
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
        if (this.props.books) {
            return (
                <div className='book-shelf'>
                    <div className="books-index-wrapper">
                        {this.renderBooks()}
                    </div>
                </div>
            )
        }
         else return <div></div>
    }
}


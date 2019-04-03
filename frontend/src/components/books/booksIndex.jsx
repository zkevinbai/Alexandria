import React, { Component } from 'react';
import BooksIndexItem from './booksIndexItem';
import BookUserShowContainer from '../books/bookshow/bookUserShowContainer';
import './booksIndex.css'
import Graph from '../graphs/graph';
import RecommendationsContainer from '../recommendations/recommendationsContainer';


export default class BooksIndex extends Component {

    constructor(){
        super();
        this.getRecs = this.getRecs.bind(this);
        this.state = { recWanted: false}
    }
  
    componentDidMount() {
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

    userBookShowModal(book){
        return <BookUserShowContainer book={book} /> 
    }

    getRecs(){
       this.setState({ recWanted: true})
    }

    render() {
        //only return the graph if books are loaded in state
        if(this.props.books && this.props.books.length > 0) {
            return (
              <div className='book-shelf'>
                <button onClick={this.getRecs}>
                    Get Recommendations by Author
                </button>
                <div className="books-index-wrapper">
                    {this.renderBooks()}
                </div>
                <div className='rec-div'>
                    <RecommendationsContainer recWanted={this.state.recWanted}/>
                </div>
                <div className='graph'>
                    <div className= "graph-label">Your Books by Genre</div>
                    <Graph books={this.props.books} />
                </div>
              </div>
            )
        }
        else return <div></div>
    }
}


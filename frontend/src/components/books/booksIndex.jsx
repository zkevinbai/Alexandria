import React, { Component } from 'react';
import BooksIndexItem from './booksIndexItem';
import './booksIndex.css'
import Graph from '../graphs/graph';
import RecommendationsContainer from '../recommendations/recommendationsContainer';


export default class BooksIndex extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            display: 'grid',
            sort: 'date',
            recWanted: false
        }
        this.getRecs = this.getRecs.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this)
        this.handleDisplayChange = this.handleDisplayChange.bind(this)
    }

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
        let books = Object.values(this.props.books)
        switch(this.state.sort) {
            case 'date':
                return books.map((book, i) => <BooksIndexItem key={i} userId={this.props.userId} book={book}/>);
            case 'title':
                books.sort((a, b) => {
                    if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1;
                    return
                })
                break;
            case 'author':
                books.sort((a, b) => {
                    if (a.author < b.author) return -1;
                    if (a.author > b.author) return 1;
                    return
                })
                break;
            case 'genre':
                books.sort((a, b) => {
                    if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1;
                    return
                })
                break;
            case 'length-stl':
                books.sort((a, b) => {
                    return a.pageCount - b.pageCount
                })
                break;
            case 'length-lts':
                books.sort((a, b) => {
                    return b.pageCount - a.pageCount
                })
                break;
            default:
                return books.map((book, i) => <BooksIndexItem key={i} userId={this.props.userId} book={book}/>)
        }
        return books.map((book, i) => <BooksIndexItem key={i} userId={this.props.userId} book={book}/>)
    }

    handleSortChange(e) {
        this.setState({
            sort: e.target.value
        })
    }

    handleDisplayChange(e) {
        this.setState({
            display: e.target.value
        })
    }

    renderSortingMenu() {
        return (
            <div className="sorting-menu">
                <select name="sort" onChange={this.handleSortChange}>
                    <option value="date">Sort by: Date added</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="genre">Genre</option>
                    <option value="length-lts">Length: longest to shortest</option>
                    <option value="length-stl">Length: shortest to longest</option>
                </select>
                <select name="display" onChange={this.handleDisplayChange}>
                    <option value="grid">Display as: Grid</option>
                    <option value="list">List</option>
                </select>
            </div>

        )
    }

    getRecs(){
       this.setState({ recWanted: true})
    }

    render() {
        //only return the graph if books are loaded in state
        if(this.props.books && this.props.books.length > 0) {
            return (
              <div className='book-shelf'>

                <div className='book-shelf-header'>
                    <h1>Your Shelf</h1>
                    {this.renderSortingMenu()}
                    <button 
                        className="recs-button"
                        onClick={this.getRecs}>
                        Get Recommendations by Author
                    </button>
                </div>
                
                
                <h2>Your Library</h2>
                <div className="books-index-wrapper">
                        {this.renderBooks()}
                </div>
                
                <h2>Your Recommendations</h2>
                <RecommendationsContainer recWanted={this.state.recWanted}/>
                
                <div className='graph'>
                        <div className= "graph-label">Your Books by Genre</div>
                        <Graph books={this.props.books} />
                </div>
              
              </div>
                    
            )
        } else return <div></div>
    }
}


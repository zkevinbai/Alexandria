import React, { Component } from 'react';
import BooksIndexItemGrid from './BooksIndexItemGrid';
import './booksIndex.css'
import '../recommendations/recommendations.css';
import Graph from '../graphs/graph';
import RecommendationsContainer from '../recommendations/recommendationsContainer';
import StaffRec from '../recommendations/staffRec'
import BooksIndexItemList from './BooksIndexItemList';
import { HashLink as Link } from 'react-router-hash-link';


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
                books.reverse();
                break;
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
                break;
        }

        switch (this.state.display) {
            case "grid":
              return books.map((book, i) => <BooksIndexItemGrid key={i} userId={this.props.userId} book={book}/>)
            case "list":
              let booksList = books.map((book, i) => <BooksIndexItemList key={i} userId={this.props.userId} book={book}/>)
              booksList.unshift(
                <div className="books-index-list-toolbar">
                    <div></div>
                    <p>Title</p>
                    <p>Author</p>
                    <p>Genre</p>
                    <p>Page Count</p>
                    <p>Description</p>
                </div>
              )
              return booksList
        }
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
       this.setState({recWanted: true})
    }

    render() {
        //only return the graph if books are loaded in state
        if(this.props.books && this.props.books.length > 0) {
            return (
              <div className='book-shelf'>

                <div className='book-shelf-header'>
                    <h1>Your Shelf</h1>
                    {this.renderSortingMenu()}
                    <Link to="#recommendations" className="recs-button">
                        <button 
                            className="recs-button"
                            onClick={this.getRecs}>
                            Get Recommendations by Author
                        </button>
                    </Link>
                </div>
                
                
                <h2>Your Library</h2>
                <div className={`books-index-wrapper-${this.state.display}`}>
                        {this.renderBooks()}
                </div>
                
                <section id="recommendations">
                    <RecommendationsContainer 
                        recWanted={this.state.recWanted}
                        userId={this.props.userId}
                        display={this.state.display}/>
                    <div className="staff-rec-container">
                        <h2>Our Recommendations</h2>
                        <StaffRec userBooks= {Object.values(this.props.books)} />
                    </div>
                </section>
                
                <div className='graph'>
                    <h1 className= "graph-label">Your Books by Genre</h1>
                    <Graph books={this.props.books} />
                </div>
              
              </div>
                    
            )
        } else return <div></div>
    }
}


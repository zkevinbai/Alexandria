import React from 'react';
import { getBooks } from '../../util/bookApiUtil';
import RecItem from './recItem';
// import './recommendations.css';

class StaffRec extends React.Component {
  constructor(props) {
    super(props);
    this.recsId = "5ca536c65eedc9284b03a839";
    this.booksReceived = false;
    this.state = { bookRecs: [] }
    this.parseBooks = this.parseBooks.bind(this);
  }

  componentDidMount(){
    getBooks(this.recsId)
      .then( res => this.parseBooks(res))
  }

  parseBooks(res){
    this.booksReceived = true;
    const books = Object.values(res.data);
    this.setState({ bookRecs: books })
  }
  
  renderRecs(bookRecs){
    return bookRecs.map((rec, i) => <RecItem key={i} book={rec} />)
  }

  render(){
    if(!this.booksReceived){
      return null;
    }

    return(
      <div className = "recs-wrapper">
        {this.renderRecs(this.state.bookRecs)}
      </div>
    )
  }

}

export default StaffRec;
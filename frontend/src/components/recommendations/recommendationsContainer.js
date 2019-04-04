import {connect} from 'react-redux';
import Recommendation from './recommendation';

const mapStateToProps = (state, ownProps) => {
  const books = Object.values(state.books)
  const authorHash = {};
  books.forEach(book => {
    if (!authorHash[book.author]){
      authorHash[book.author] = book.title;
    }
    else {
      authorHash[book.author] += ` ${book.title}`;
    }
  })
  const recWanted = ownProps.recWanted;
  const newProps = ({
    authorHash, 
    recWanted
  });
  
  return(newProps)
}

export default connect(mapStateToProps)(Recommendation);
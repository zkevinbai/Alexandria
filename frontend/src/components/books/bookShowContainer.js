import { connect } from 'react-redux';
import { addUserBook, removeUserBook, fetchUserBook, fetchUserBooks } from '../../actions/bookActions';
import BookShow from './BookShow';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.user.id;
  const bookId = ownProps.match.params.bookId;
  const book = state.books[bookId];
  return({currentUserId: currentUserId, bookId: bookId, book: book, onShelf: true})
};

const mapDispatchToProps = dispatch => ({
  addBook: data => dispatch(addUserBook(data)),
  deleteBook: data => dispatch(removeUserBook(data)),
  fetchBook: bookId => dispatch(fetchUserBook(bookId)),
  fetchShelf: userId => dispatch(fetchUserBooks(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookShow));
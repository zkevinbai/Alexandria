import { connect } from 'react-redux';
import { removeUserBook, fetchUserBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = (state, ownProps) => {
        const currentUserId = state.session.user.id;
        const bookId = ownProps.match.params.bookId;
        const book = state.books[bookId];
        return ({
            modalType: "userBookShow",
            actionType: "deleteBook",
            currentUserId: currentUserId, 
            bookId, 
            book, 
            onShelf: true})
};


const mapDispatchToProps = (dispatch) => ({
    removeUserBook: bookId => dispatch(removeUserBook(bookId)),
    fetchBook: bookId => dispatch(fetchUserBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);

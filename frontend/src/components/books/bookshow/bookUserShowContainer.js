import { connect } from 'react-redux';
import { removeUserBook, queryGoogleBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = state => ({
        actionType: "removeUserBook",
        book: state.searchBook
});


const mapDispatchToProps = dispatch => ({
        action: (data) => dispatch(removeUserBook(data)),
        queryGoogleBook: (queryBookId) => dispatch(queryGoogleBook(queryBookId))
});


export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);

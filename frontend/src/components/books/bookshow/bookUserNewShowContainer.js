import { connect } from 'react-redux';
import { addUserBook, queryGoogleBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = (state, ownProps) => ({
        actionType: "addUserBook",
        userId: state.session.user.id,
        book: state.searchBook
});


const mapDispatchToProps = (dispatch) => ({
    action: (data) => dispatch(addUserBook(data)),
    queryGoogleBook: (queryBookId) => dispatch(queryGoogleBook(queryBookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);

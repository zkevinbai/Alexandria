import { connect } from 'react-redux';
import { addUserBook, queryGoogleBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = (state, ownProps) => {
    return({
        modalType: "userBookShow",
        actionType: "addBook",
        userId: state.session.user.id,
        book: state.searchBook
    })
};


const mapDispatchToProps = (dispatch) => ({
    addUserBook: (data) => dispatch(addUserBook(data)),
    queryGoogleBook: (queryBookId) => dispatch(queryGoogleBook(queryBookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);

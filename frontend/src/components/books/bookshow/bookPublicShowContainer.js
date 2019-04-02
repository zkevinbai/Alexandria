import { connect } from 'react-redux';
import { queryGoogleBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = state => {
    return{
        actionType: "publicBookShow",
        book: state.searchBook
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        queryGoogleBook: (queryBookId) => dispatch(queryGoogleBook(queryBookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);
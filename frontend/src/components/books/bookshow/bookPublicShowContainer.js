import { connect } from 'react-redux';
import { queryGoogleBook } from '../../../actions/bookActions';
import BookShowModal from './BookShowModal';

const mapStateToProps = (storeState) => {
    return{
        actionType: "publicBookShow",
        book: storeState.searchBook
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        queryGoogleBook: (queryBookId) => dispatch(queryGoogleBook(queryBookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);
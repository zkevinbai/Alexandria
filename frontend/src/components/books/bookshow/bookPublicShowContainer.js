import { connect } from 'react-redux';
import BookShow from './bookShow';
import { queryGoogleBook } from '../../../actions/bookActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
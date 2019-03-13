import { connect } from 'react-redux';
import BookShow from './bookShow';
import { removeUserBook } from '../../../actions/bookActions';

const mapStateToProps = (storeState) => {
    return {
        actionType: "removeUserBook"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (data) => dispatch(removeUserBook(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
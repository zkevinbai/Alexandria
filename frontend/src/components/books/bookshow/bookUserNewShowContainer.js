import { connect } from 'react-redux';
import BookShow from './bookShow';
import { addUserBook } from '../../../actions/bookActions';

const mapStateToProps = (storeState, ownProps) => {
    return {
        actionType: "addUserBook",
        userId: storeState.session.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (data) => dispatch(addUserBook(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);

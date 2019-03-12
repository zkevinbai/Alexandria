import { connect } from 'react-redux';
import { addUserBook } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState) => {
    return {
        userId: storeState.session.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBook: (data) => dispatch(addUserBook(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
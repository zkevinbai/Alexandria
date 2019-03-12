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
        addUserBook: (book) => dispatch(addUserBook(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
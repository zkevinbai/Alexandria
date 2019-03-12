import { connect } from 'react-redux';
import { addUserBook } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBook: (data) => dispatch(addUserBook(data)), 
        cat: () => console.log("cat")
    };
};

export default connect(null, mapDispatchToProps)(SearchBarDropdown);
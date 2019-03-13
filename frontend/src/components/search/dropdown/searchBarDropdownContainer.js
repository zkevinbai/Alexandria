import { connect } from 'react-redux';
import { addUserBook, clearSearch } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState, ownProps) => {
    if (storeState.session.user.id){
        return {
            userId: storeState.session.user.id,
            modalType: "userNew"
        } 
    } else {
        return {
            modalType: "public"
        };
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBook: (data) => dispatch(addUserBook(data)), 
        clearSearch: () => dispatch(clearSearch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
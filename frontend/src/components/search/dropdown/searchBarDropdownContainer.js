import { connect } from 'react-redux';
import { addUserBook } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState, ownProps) => {
    if (storeState.session.user){
        return {
            userId: storeState.session.user.id,
            modalType: "userNew"
        };
    } else {
        return {
            modalType: "public"
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBook: (data) => dispatch(addUserBook(data)), 
        cat: () => console.log("cat")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
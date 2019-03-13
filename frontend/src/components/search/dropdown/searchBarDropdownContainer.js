import { connect } from 'react-redux';
import { addUserBook, clearSearch } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState, ownProps) => {
    if (storeState.session.user){
        return {
            userId: storeState.session.user.id
        } 
    } else return {}
  
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
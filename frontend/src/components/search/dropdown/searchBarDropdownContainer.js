import { connect } from 'react-redux';
import { addUserBook, clearSearch } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState) => {

    if (storeState.session.user){
        return {
            userId: storeState.session.user.id
        } 
    } else return {}
   

};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserBook: (data) => dispatch(addUserBook(data)), 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
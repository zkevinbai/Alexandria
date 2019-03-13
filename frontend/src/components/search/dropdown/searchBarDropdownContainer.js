import { connect } from 'react-redux';
import { addUserBook } from '../../../actions/bookActions';
import SearchBarDropdown from './searchBarDropdown';

const mapStateToProps = (storeState) => {

    if (storeState.session.user){
        return {
            userId: storeState.session.user.id
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
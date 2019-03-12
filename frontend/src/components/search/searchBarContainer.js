import { connect } from 'react-redux';
import { queryGoogleBooks } from '../../actions/bookActions';
import SearchBar from './searchBar';

const mapStateToProps = (storeState) => {
    return {
        searchResults: Object.values(storeState.search)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        queryGoogleBooks: (queryString) => dispatch(queryGoogleBooks(queryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
import { connect } from 'react-redux';
import { queryGoogleBooks, clearSearch } from '../../actions/bookActions';
import SearchBar from './searchBar';

const mapStateToProps = (storeState, ownProps) => {
    return {
        searchResults: Object.values(storeState.search)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearch: () => dispatch(clearSearch()),
        queryGoogleBooks: (queryString) => dispatch(queryGoogleBooks(queryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
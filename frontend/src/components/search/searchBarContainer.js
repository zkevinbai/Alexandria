import { connect } from 'react-redux';
import { queryGoogleBooks, clearSearch } from '../../actions/bookActions';
import SearchBar from './searchBar';

const mapStateToProps = state => {
    return {
        searchResults: Object.values(state.search),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearSearch: () => dispatch(clearSearch()),
        queryGoogleBooks: (queryString) => dispatch(queryGoogleBooks(queryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
import { connect } from 'react-redux';
import { queryGoogleBooks, clearSearch, receiveQuery } from '../../actions/bookActions';
import SearchBar from './searchBar';

const mapStateToProps = state => {
    return {
        searchResults: Object.values(state.search.results),
        queryString: state.search.query
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearSearch: () => dispatch(clearSearch()),
        setQueryString: queryString => dispatch(receiveQuery(queryString)),
        queryGoogleBooks: queryString => dispatch(queryGoogleBooks(queryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
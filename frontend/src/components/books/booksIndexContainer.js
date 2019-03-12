import { connect } from 'react-redux';
import { fetchUserBooks } from '../../actions/bookActions';
import BooksIndex from './BooksIndex';

const mapStateToProps = state => {
    return {
        books: Object.values(state.books)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBooks: user => dispatch(fetchUserBooks(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
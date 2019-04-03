import { connect } from 'react-redux';
import { fetchUserBooks } from '../../actions/bookActions';
import BooksIndex from './booksIndex';

const mapStateToProps = (state, ownProps) => {
    return {
        books: Object.values(state.books),
        userId: ownProps.match.params.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBooks: userId => dispatch(fetchUserBooks(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
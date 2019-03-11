import { connect } from 'react-redux';
import { 
    fetchUserBooks,
} from '../../actions/bookActions';
import BooksIndex from './booksIndex';
import BooksIndexItem from './booksIndexItem';

const mapStateToProps = (storeState) => {
    return {
        books: Object.values(storeState.books)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBooks: (u) => dispatch(fetchUserBooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
import { combineReducers } from 'redux';
import session from './sessionReducer';
import books from './booksReducer';
import search from './searchReducer';
import searchBook from './searchBookReducer';
import errors from './errorsReducer';

const RootReducer = combineReducers({
    session,
    books,
    search,
    searchBook,
    errors
});

export default RootReducer;
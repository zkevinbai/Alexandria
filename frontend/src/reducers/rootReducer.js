import { combineReducers } from 'redux';
import session from './sessionReducer';
import books from './booksReducer';
import search from './searchReducer';
import errors from './errorsReducer';

const RootReducer = combineReducers({
    session,
    books, 
    search,
    errors
});

export default RootReducer;